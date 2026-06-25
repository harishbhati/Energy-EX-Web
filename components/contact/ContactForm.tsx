'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Send, Lock, MessageSquare, CheckCircle } from 'lucide-react';

/* ─── constants ──────────────────────────────────────────── */
const SERVICE_OPTIONS = [
  'Electricity Procurement',
  'Gas Procurement',
  'Water Procurement',
  'Waste Procurement',
  'Cleaning Services',
  'Multiple Services',
  'General Enquiry',
];

/* ─── shared input style tokens ─────────────────────────────
   Split border into width/style/color so React never has to
   reconcile the shorthand `border` against `borderColor`. */
const inputBase: React.CSSProperties = {
  width: '100%',
  fontFamily: 'inherit',
  fontSize: '14.5px',
  color: 'var(--ink)',
  background: 'var(--off)',
  borderWidth: '1.5px',
  borderStyle: 'solid',
  borderColor: 'var(--border)',
  borderRadius: 'var(--rs)',
  padding: '11px 14px',
  outline: 'none',
  transition: 'border-color 0.25s, box-shadow 0.25s, background 0.25s',
  appearance: 'none' as const,
};

const focusStyle: React.CSSProperties = {
  borderColor: 'var(--orange)',
  background: '#fff',
  boxShadow: '0 0 0 3px rgba(232,98,10,0.10)',
};

const errorStyle: React.CSSProperties = {
  borderColor: '#E24B4A',
  boxShadow: '0 0 0 3px rgba(226,75,74,0.12)',
};

/* ─── form value types ───────────────────────────────────── */
type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
  consent: boolean;
};

/* ─── component ──────────────────────────────────────────── */
export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ mode: 'onBlur' });

  const [focused, setFocused] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [apiError, setApiError] = useState('');

  /* ─── helpers ─────────────────────────────────────────── */

  /** Merges RHF's onBlur (validates) with our focus-tracking blur. */
  function mergeBlur(
    rhfOnBlur: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ): React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement> {
    return (e) => { rhfOnBlur(e); setFocused(null); };
  }

  /** Returns inline style for a field based on focus + RHF error state. */
  function fieldStyle(name: keyof FormValues): React.CSSProperties {
    const hasError = !!errors[name];
    const isFocused = focused === name;
    return {
      ...inputBase,
      ...(isFocused && !hasError ? focusStyle : {}),
      ...(hasError ? errorStyle : {}),
    };
  }

  /* ─── web3forms submission ────────────────────────────── */
  async function onSubmit(data: FormValues) {
    setApiError('');
    try {
      const body = new FormData();
      body.append('access_key', process.env.NEXT_PUBLIC_CONTACT_FORM_KEY ?? '');
      body.append('subject', `New Energyex Enquiry — ${data.service || 'General'}`);
      body.append('from_name', `${data.firstName} ${data.lastName}`);
      body.append('name', `${data.firstName} ${data.lastName}`);
      body.append('email', data.email);
      if (data.phone)   body.append('phone', data.phone);
      if (data.company) body.append('company', data.company);
      body.append('service', data.service);
      body.append('message', data.message);
      body.append('botcheck', '');

      const res  = await fetch('https://api.web3forms.com/submit', { method: 'POST', body });
      const json = await res.json();

      if (json.success) {
        setSubmitted(true);
      } else {
        setApiError(json.message ?? 'Something went wrong. Please try again.');
      }
    } catch {
      setApiError('Network error. Please check your connection and try again.');
    }
  }

  /* ─── success screen ──────────────────────────────────── */
  if (submitted) {
    return (
      <div className="bg-white overflow-hidden rounded-[var(--r)] shadow-sh border border-[rgba(13,27,42,0.07)]">
        <div className="flex items-center gap-[14px] bg-navy py-6 px-8">
          <div className="w-[42px] h-[42px] rounded-[10px] flex items-center justify-center flex-shrink-0 bg-[rgba(232,98,10,0.2)]">
            <MessageSquare size={22} className="text-brand-orange-soft" style={{ strokeWidth: 2 }} />
          </div>
          <div>
            <h2 className="font-serif-num text-white text-[22px] font-semibold">Your Enquiry</h2>
            <p className="text-[13px] text-white/55 mt-[2px]">We typically respond same business day</p>
          </div>
        </div>
        <div className="text-center py-[40px] px-[32px]">
          <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5 bg-[#EAF7EE]">
            <CheckCircle size={30} style={{ color: '#28A745', strokeWidth: 2.5 }} />
          </div>
          <h3 className="font-serif-num mb-[10px] text-[26px] font-semibold text-ink">Message Received!</h3>
          <p className="text-[14.5px] text-muted leading-[1.7]">
            Thank you for getting in touch. One of our energy specialists will reach out within 24 hours —
            usually the same business day.
            <br /><br />
            In the meantime, feel free to call us on{' '}
            <strong className="text-ink">0203 727 2588</strong>.
          </p>
        </div>
      </div>
    );
  }

  /* ─── form ────────────────────────────────────────────── */
  return (
    <div className="bg-white overflow-hidden rounded-[var(--r)] shadow-sh border border-[rgba(13,27,42,0.07)]">
      {/* Header */}
      <div className="flex items-center gap-[14px] bg-navy px-6 py-5 md:px-8 md:py-6">
        <div className="w-[42px] h-[42px] rounded-[10px] flex items-center justify-center flex-shrink-0 bg-[rgba(232,98,10,0.2)]">
          <MessageSquare size={22} className="text-brand-orange-soft" style={{ strokeWidth: 2 }} />
        </div>
        <div>
          <h2 className="font-serif-num text-white text-[22px] font-semibold">Your Enquiry</h2>
          <p className="text-[13px] text-white/55 mt-[2px]">We typically respond same business day</p>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} noValidate className="p-5 md:p-8">

        {/* ── Row 1: First / Last name ── */}
        <div className="grid gap-4 mb-4 grid-cols-1 sm:grid-cols-2">
          {(
            [
              { name: 'firstName', label: 'First Name', placeholder: 'e.g. Sarah' },
              { name: 'lastName',  label: 'Last Name',  placeholder: 'e.g. Johnson' },
            ] as const
          ).map(({ name, label, placeholder }) => {
            const { onBlur, ...rest } = register(name, { required: `${label} is required` });
            return (
              <div key={name}>
                <label className="block font-semibold uppercase mb-[7px] text-[12.5px] text-ink tracking-[0.2px]">
                  {label} <span className="text-brand-orange">*</span>
                </label>
                <input
                  type="text"
                  placeholder={placeholder}
                  {...rest}
                  onBlur={mergeBlur(onBlur)}
                  onFocus={() => setFocused(name)}
                  style={fieldStyle(name)}
                />
                {errors[name] && (
                  <p className="mt-1 text-[11.5px] text-[#C0392B]">{errors[name]?.message}</p>
                )}
              </div>
            );
          })}
        </div>

        {/* ── Row 2: Email + Phone ── */}
        <div className="grid gap-4 mb-4 grid-cols-1 sm:grid-cols-2">
          <div>
            <label className="block font-semibold uppercase mb-[7px] text-[12.5px] text-ink tracking-[0.2px]">
              Email Address <span className="text-brand-orange">*</span>
            </label>
            {(() => {
              const { onBlur, ...rest } = register('email', {
                required: 'Email address is required',
                pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Enter a valid email address' },
              });
              return (
                <>
                  <input
                    type="email"
                    placeholder="you@company.co.uk"
                    {...rest}
                    onBlur={mergeBlur(onBlur)}
                    onFocus={() => setFocused('email')}
                    style={fieldStyle('email')}
                  />
                  {errors.email && (
                    <p className="mt-1 text-[11.5px] text-[#C0392B]">{errors.email.message}</p>
                  )}
                </>
              );
            })()}
          </div>
          <div>
            <label className="block font-semibold uppercase mb-[7px] text-[12.5px] text-ink tracking-[0.2px]">
              Phone Number
            </label>
            {(() => {
              const { onBlur, ...rest } = register('phone');
              return (
                <input
                  type="tel"
                  placeholder="e.g. 07700 900 123"
                  {...rest}
                  onBlur={mergeBlur(onBlur)}
                  onFocus={() => setFocused('phone')}
                  style={fieldStyle('phone')}
                />
              );
            })()}
          </div>
        </div>

        {/* ── Row 3: Company + Service ── */}
        <div className="grid gap-4 mb-4 grid-cols-1 sm:grid-cols-2">
          <div>
            <label className="block font-semibold uppercase mb-[7px] text-[12.5px] text-ink tracking-[0.2px]">
              Company Name
            </label>
            {(() => {
              const { onBlur, ...rest } = register('company');
              return (
                <input
                  type="text"
                  placeholder="Your organisation"
                  {...rest}
                  onBlur={mergeBlur(onBlur)}
                  onFocus={() => setFocused('company')}
                  style={fieldStyle('company')}
                />
              );
            })()}
          </div>
          <div>
            <label className="block font-semibold uppercase mb-[7px] text-[12.5px] text-ink tracking-[0.2px]">
              Service Interest <span className="text-brand-orange">*</span>
            </label>
            {(() => {
              const { onBlur, ...rest } = register('service', { required: 'Please select a service' });
              return (
                <>
                  <div className="relative">
                    <select
                      {...rest}
                      onBlur={mergeBlur(onBlur)}
                      onFocus={() => setFocused('service')}
                      style={{ ...fieldStyle('service'), paddingRight: '34px', cursor: 'pointer' }}
                    >
                      <option value="" disabled>Select a service…</option>
                      {SERVICE_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                    <div
                      className="absolute pointer-events-none"
                      style={{
                        right: '13px', top: '50%', transform: 'translateY(-50%)',
                        width: 0, height: 0,
                        borderLeft: '5px solid transparent',
                        borderRight: '5px solid transparent',
                        borderTop: '6px solid var(--faint)',
                      }}
                    />
                  </div>
                  {errors.service && (
                    <p className="mt-1 text-[11.5px] text-[#C0392B]">{errors.service.message}</p>
                  )}
                </>
              );
            })()}
          </div>
        </div>

        {/* ── Enquiry textarea ── */}
        <div className="mb-4">
          <label className="block font-semibold uppercase mb-[7px] text-[12.5px] text-ink tracking-[0.2px]">
            Your Enquiry <span className="text-brand-orange">*</span>
          </label>
          {(() => {
            const { onBlur, ...rest } = register('message', {
              required: 'Please describe your enquiry',
              minLength: { value: 10, message: 'Please provide a bit more detail' },
            });
            return (
              <>
                <textarea
                  placeholder="Tell us about your energy usage, number of sites, current supplier, or anything else that would help us assist you…"
                  rows={5}
                  {...rest}
                  onBlur={mergeBlur(onBlur)}
                  onFocus={() => setFocused('message')}
                  style={{ ...fieldStyle('message'), resize: 'vertical', minHeight: '118px' }}
                />
                {errors.message && (
                  <p className="mt-1 text-[11.5px] text-[#C0392B]">{errors.message.message}</p>
                )}
              </>
            );
          })()}
        </div>

        {/* ── Consent ── */}
        <div className="flex items-start gap-[10px] mb-5">
          <input
            type="checkbox"
            id="consent"
            {...register('consent', { required: 'You must agree to continue.' })}
            className="flex-shrink-0 mt-0.5 cursor-pointer accent-[color:var(--orange)]"
            style={{
              width: '17px',
              height: '17px',
              outline: errors.consent ? '2px solid #E24B4A' : 'none',
            }}
          />
          <div>
            <label htmlFor="consent" className="cursor-pointer text-[13px] text-muted leading-[1.5]">
              I agree to Energyex processing my data to respond to this enquiry. View our{' '}
              <a href="/privacy-policy" className="text-brand-orange">Privacy Policy</a> and{' '}
              <a href="/complaints" className="text-brand-orange">Complaints Procedure</a>.
            </label>
            {errors.consent && (
              <p className="mt-1 text-[11.5px] text-[#C0392B]">{errors.consent.message}</p>
            )}
          </div>
        </div>

        {/* ── Submit ── */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full flex items-center justify-center gap-[10px] font-bold transition-all duration-250 bg-brand-orange text-white text-[15px] border-none rounded-[var(--rs)] shadow-[0_4px_16px_rgba(232,98,10,0.30)] ${
            isSubmitting ? 'opacity-70 cursor-not-allowed' : 'cursor-pointer hover:-translate-y-0.5'
          }`}
          style={{ letterSpacing: '0.3px', padding: '14px 24px' }}
          onMouseEnter={(e) => { if (!isSubmitting) e.currentTarget.style.background = 'var(--orange-soft)'; }}
          onMouseLeave={(e) => { if (!isSubmitting) e.currentTarget.style.background = 'var(--orange)'; }}
        >
          {isSubmitting ? 'Sending…' : 'Send My Enquiry'}
          {!isSubmitting && <Send size={18} strokeWidth={2.2} />}
        </button>

        {/* API-level error */}
        {apiError && (
          <p className="mt-3 text-center text-[13px] font-semibold text-[#C0392B]">{apiError}</p>
        )}

        {/* Security note */}
        <div className="flex items-center justify-center gap-[6px] mt-3 text-xs text-faint">
          <Lock size={13} strokeWidth={2} />
          Your data is secure and never sold to third parties
        </div>
      </form>
    </div>
  );
}
