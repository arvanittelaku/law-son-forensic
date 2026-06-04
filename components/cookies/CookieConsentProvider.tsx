"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  ACCEPT_ALL_PREFERENCES,
  CONSENT_VERSION,
  DEFAULT_PREFERENCES,
  REJECT_NON_ESSENTIAL,
  type ConsentPreferences,
  type ConsentState,
} from "@/lib/cookies/types";
import { readConsent, writeConsent } from "@/lib/cookies/storage";
import {
  setDefaultConsentDenied,
  updateGoogleConsentMode,
} from "@/lib/cookies/consent-mode";
import { applyTrackingPreferences } from "@/lib/cookies/tracking";

type CookieConsentContextValue = {
  hasConsented: boolean;
  preferences: ConsentPreferences;
  bannerOpen: boolean;
  modalOpen: boolean;
  acceptAll: () => void;
  rejectNonEssential: () => void;
  openPreferences: () => void;
  closeBanner: () => void;
  savePreferences: (prefs: ConsentPreferences) => void;
  openSettings: () => void;
};

const CookieConsentContext = createContext<CookieConsentContextValue | null>(
  null
);

function persistAndApply(prefs: ConsentPreferences) {
  const state: ConsentState = {
    version: CONSENT_VERSION,
    timestamp: Date.now(),
    preferences: prefs,
  };
  writeConsent(state);
  updateGoogleConsentMode(prefs);
  applyTrackingPreferences(prefs);
}

export function CookieConsentProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);
  const [hasConsented, setHasConsented] = useState(false);
  const [preferences, setPreferences] =
    useState<ConsentPreferences>(DEFAULT_PREFERENCES);
  const [bannerOpen, setBannerOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    setDefaultConsentDenied();
    const stored = readConsent();
    if (stored) {
      setPreferences(stored.preferences);
      setHasConsented(true);
      setBannerOpen(false);
      updateGoogleConsentMode(stored.preferences);
      applyTrackingPreferences(stored.preferences);
    } else {
      setBannerOpen(true);
    }
    setMounted(true);
  }, []);

  const acceptAll = useCallback(() => {
    const prefs = ACCEPT_ALL_PREFERENCES;
    setPreferences(prefs);
    setHasConsented(true);
    setBannerOpen(false);
    setModalOpen(false);
    persistAndApply(prefs);
  }, []);

  const rejectNonEssential = useCallback(() => {
    const prefs = REJECT_NON_ESSENTIAL;
    setPreferences(prefs);
    setHasConsented(true);
    setBannerOpen(false);
    setModalOpen(false);
    persistAndApply(prefs);
  }, []);

  const savePreferences = useCallback((prefs: ConsentPreferences) => {
    const merged = { ...prefs, necessary: true as const };
    setPreferences(merged);
    setHasConsented(true);
    setBannerOpen(false);
    setModalOpen(false);
    persistAndApply(merged);
  }, []);

  const openPreferences = useCallback(() => {
    setModalOpen(true);
    setBannerOpen(false);
  }, []);

  const openSettings = useCallback(() => {
    setModalOpen(true);
  }, []);

  const closeBanner = useCallback(() => {
    setBannerOpen(false);
  }, []);

  const value = useMemo(
    () => ({
      hasConsented,
      preferences,
      bannerOpen: mounted && bannerOpen,
      modalOpen: mounted && modalOpen,
      acceptAll,
      rejectNonEssential,
      openPreferences,
      closeBanner,
      savePreferences,
      openSettings,
    }),
    [
      hasConsented,
      preferences,
      mounted,
      bannerOpen,
      modalOpen,
      acceptAll,
      rejectNonEssential,
      openPreferences,
      closeBanner,
      savePreferences,
      openSettings,
    ]
  );

  return (
    <CookieConsentContext.Provider value={value}>
      {children}
    </CookieConsentContext.Provider>
  );
}

export function useCookieConsent() {
  const ctx = useContext(CookieConsentContext);
  if (!ctx) {
    throw new Error("useCookieConsent must be used within CookieConsentProvider");
  }
  return ctx;
}
