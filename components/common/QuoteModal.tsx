'use client';

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { X, ShieldCheck, ChevronDown, Check } from 'lucide-react';
/* FILE UPLOAD — uncomment when upgrading to Web3Forms Pro:
import { useRef } from 'react';
import { Paperclip, FileText } from 'lucide-react';
*/
import Link from 'next/link';
import { useQuoteModal } from '@/contexts/QuoteModalContext';

const SERVICES = [
  'Electricity Procurement',
  'Gas Procurement',
  'Solar Procurement',
  'New Connections',
  'Beyond Procurement',
  'Water Procurement',
  'Waste Procurement',
  'Cleaning Services',
  'Property Management',
  'Not sure / general enquiry',
];

/* ─── shared input style tokens ──────────────────────────────
   Split border into width/style/color — avoids React's
   borderColor / border shorthand re-render warning. */
const inputBase: React.CSSProperties = {
  width: '100%',
  fontFamily: 'inherit',
  fontSize: '14px',
  color: 'var(--ink)',
  background: 'var(--off)',
  borderWidth: '1.5px',
  borderStyle: 'solid',
  borderColor: 'var(--border)',
  borderRadius: 'var(--rs)',
  padding: '12px 14px',
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

type QuoteFormValues = {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
  consent: boolean;
};

export default function QuoteModal() {
  const { isOpen, closeModal } = useQuoteModal();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<QuoteFormValues>({ mode: 'onBlur' });

  const [focused, setFocused] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [apiError, setApiError] = useState('');

  /* FILE UPLOAD — commented out (Web3Forms Pro required)
  const [files, setFiles] = useState<File[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  */

  /* ─── helpers ────────────────────────────────────────────── */

  function mergeBlur(
    rhfOnBlur: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ): React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement> {
    return (e) => { rhfOnBlur(e); setFocused(null); };
  }

  function fieldStyle(name: keyof QuoteFormValues): React.CSSProperties {
    return {
      ...inputBase,
      ...(focused === name && !errors[name] ? focusStyle : {}),
      ...(errors[name] ? errorStyle : {}),
    };
  }

  /* ─── side-effects ───────────────────────────────────────── */

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') closeModal(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [isOpen, closeModal]);

  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setSubmitted(false);
        setApiError('');
        reset();
        /* FILE UPLOAD — commented out
        setFiles([]);
        */
      }, 300);
    }
  }, [isOpen, reset]);

  /* FILE UPLOAD — commented out (Web3Forms Pro required)
  function addFiles(incoming: FileList | null) {
    if (!incoming) return;
    setFiles((prev) => [...prev, ...Array.from(incoming)]);
  }

  function removeFile(index: number) {
    setFiles((prev) => prev.filter((_, i) => i !== index));
    if (fileInputRef.current) fileInputRef.current.value = '';
  }

  function handleDragOver(e: React.DragEvent) {
    e.preventDefault();
    setIsDragging(true);
  }

  function handleDragLeave() {
    setIsDragging(false);
  }

  function handleDrop(e: React.DragEvent) {
    e.preventDefault();
    setIsDragging(false);
    addFiles(e.dataTransfer.files);
  }
  */

  /* ─── web3forms submission ───────────────────────────────── */
  async function onSubmit(data: QuoteFormValues) {
    setApiError('');
    try {
      const body = new FormData();
      body.append('access_key', process.env.NEXT_PUBLIC_QUOTE_FORM_KEY ?? '');
      body.append('subject', `New Energyex Quote Request — ${data.service || 'General Enquiry'}`);
      body.append('from_name', data.name);
      body.append('name', data.name);
      body.append('email', data.email);
      body.append('phone', data.phone);
      if (data.service) body.append('service', data.service);
      if (data.message) body.append('message', data.message);
      body.append('botcheck', '');

      /* FILE UPLOAD — commented out (Web3Forms Pro required)
      files.forEach((file) => body.append('attachment', file));
      */

      const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body });
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

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Get a free quote"
      className={`fixed inset-0 bg-[rgba(13,27,42,0.6)] backdrop-blur-[6px] z-[1000] flex items-center justify-center p-[24px] transition-opacity duration-[250ms] ${
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      onClick={(e) => { if (e.target === e.currentTarget) closeModal(); }}
    >
      {/* Box */}
      <div
        className={`bg-white w-full max-w-[700px] max-h-[92vh] overflow-y-auto relative shadow-[0_16px_50px_rgba(13,27,42,0.12)] rounded-[var(--r)] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isOpen ? 'translate-y-0 scale-100' : 'translate-y-[18px] scale-[0.98]'
        }`}
      >
        {/* Header */}
        <div className="bg-gradient-to-br from-navy to-navy-2 px-[28px] sm:px-[38px] pt-[34px] pb-[28px] relative overflow-hidden rounded-t-[var(--r)]">
          <div className="absolute w-[220px] h-[220px] rounded-full bg-brand-orange/[0.18] blur-[50px] -top-[110px] -right-[50px] pointer-events-none" />

          <button
            onClick={closeModal}
            aria-label="Close modal"
            className="absolute top-[18px] right-[18px] w-[34px] h-[34px] rounded-full bg-white/10 border border-white/[0.18] text-white flex items-center justify-center transition-colors duration-200 hover:bg-white/20 z-[2]"
          >
            <X size={15} />
          </button>

          <p className="text-[11px] font-bold text-brand-orange-soft uppercase tracking-[2px] mb-[10px] relative">
            Free, no-obligation quote
          </p>
          <h2 className="font-serif-num text-[26px] sm:text-[28px] font-semibold text-white leading-[1.2] max-w-[420px] relative mb-0">
            Tell us a little about your requirement.
          </h2>
          <p className="text-[13.5px] text-white/55 mt-[8px] font-light leading-[1.6] max-w-[420px] relative">
            Share your details and we&apos;ll come back with a tailored comparison — usually within one
            working day.
          </p>
        </div>

        {/* Form */}
        {!submitted ? (
          <form onSubmit={handleSubmit(onSubmit)} noValidate className="px-[24px] sm:px-[38px] pt-[30px] pb-[34px]">

            {/* Row: name / phone / email */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-[14px] mb-[18px]">

              {/* Full name */}
              <div>
                <label className="block text-[12.5px] font-bold text-[#33414F] mb-[7px]">
                  Full name <span className="text-brand-orange">*</span>
                </label>
                {(() => {
                  const { onBlur, ...rest } = register('name', { required: 'Full name is required' });
                  return (
                    <>
                      <input
                        type="text"
                        placeholder="Jane Smith"
                        {...rest}
                        onBlur={mergeBlur(onBlur)}
                        onFocus={() => setFocused('name')}
                        style={fieldStyle('name')}
                      />
                      {errors.name && (
                        <p className="mt-1 text-[11.5px] text-[#C0392B]">{errors.name.message}</p>
                      )}
                    </>
                  );
                })()}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-[12.5px] font-bold text-[#33414F] mb-[7px]">
                  Phone number <span className="text-brand-orange">*</span>
                </label>
                {(() => {
                  const { onBlur, ...rest } = register('phone', { required: 'Phone number is required' });
                  return (
                    <>
                      <input
                        type="tel"
                        placeholder="07xxx xxxxxx"
                        {...rest}
                        onBlur={mergeBlur(onBlur)}
                        onFocus={() => setFocused('phone')}
                        style={fieldStyle('phone')}
                      />
                      {errors.phone && (
                        <p className="mt-1 text-[11.5px] text-[#C0392B]">{errors.phone.message}</p>
                      )}
                    </>
                  );
                })()}
              </div>

              {/* Email */}
              <div>
                <label className="block text-[12.5px] font-bold text-[#33414F] mb-[7px]">
                  Email address <span className="text-brand-orange">*</span>
                </label>
                {(() => {
                  const { onBlur, ...rest } = register('email', {
                    required: 'Email address is required',
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: 'Enter a valid email address',
                    },
                  });
                  return (
                    <>
                      <input
                        type="email"
                        placeholder="jane@company.com"
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
            </div>

            {/* Service dropdown */}
            <div className="mb-[18px]">
              <label className="block text-[12.5px] font-bold text-[#33414F] mb-[7px]">
                Which service is this about?
              </label>
              {(() => {
                const { onBlur, ...rest } = register('service');
                return (
                  <div className="relative">
                    <select
                      {...rest}
                      onBlur={mergeBlur(onBlur)}
                      onFocus={() => setFocused('service')}
                      style={{ ...fieldStyle('service'), paddingRight: '34px', cursor: 'pointer' }}
                    >
                      <option value="">Select a service</option>
                      {SERVICES.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                    <ChevronDown
                      size={14}
                      className="absolute right-[12px] top-1/2 -translate-y-1/2 text-muted pointer-events-none"
                    />
                  </div>
                );
              })()}
            </div>

            {/* FILE UPLOAD — commented out (Web3Forms Pro required)
            <div className="mb-[18px]">
              <label className="block text-[12.5px] font-bold text-[#33414F] mb-[7px]">
                Attach a recent bill{' '}
                <span className="text-muted font-normal">(optional)</span>
              </label>
              <div
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                className={`relative border-[1.5px] border-dashed rounded-rs px-[18px] py-[22px] text-center cursor-pointer transition-all duration-200 ${
                  isDragging
                    ? 'border-brand-orange bg-orange-tint'
                    : 'border-[#BCC7D4] bg-off hover:border-brand-orange hover:bg-orange-tint'
                }`}
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  multiple
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={(e) => addFiles(e.target.files)}
                  className="absolute inset-0 opacity-0 cursor-pointer"
                />
                <Paperclip size={22} className="text-muted mx-auto mb-[8px]" />
                <p className="text-[13px] font-semibold text-[#33414F] mb-[3px]">
                  Click to upload or drag a file here
                </p>
                <span className="text-[11.5px] text-muted font-light">
                  PDF, JPG or PNG — up to 10MB each
                </span>
              </div>

              {files.length > 0 && (
                <div className="flex flex-col gap-[8px] mt-[10px]">
                  {files.map((file, i) => (
                    <div
                      key={`${file.name}-${i}`}
                      className="flex items-center justify-between bg-off border border-border-color rounded-[8px] px-[12px] py-[8px] text-[12.5px]"
                    >
                      <div className="flex items-center gap-[8px] text-[#33414F] font-semibold overflow-hidden">
                        <FileText size={14} className="flex-shrink-0 text-muted" />
                        <span className="truncate">{file.name}</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeFile(i)}
                        className="text-muted font-bold flex-shrink-0 ml-[10px] hover:text-[#C24545] transition-colors text-[13px]"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
            */}

            {/* Notes */}
            <div className="mb-[18px]">
              <label className="block text-[12.5px] font-bold text-[#33414F] mb-[7px]">
                Anything else we should know?{' '}
                <span className="text-muted font-normal">(optional)</span>
              </label>
              {(() => {
                const { onBlur, ...rest } = register('message');
                return (
                  <textarea
                    placeholder="e.g. 3 sites, contract renews in March..."
                    rows={3}
                    {...rest}
                    onBlur={mergeBlur(onBlur)}
                    onFocus={() => setFocused('message')}
                    style={{ ...fieldStyle('message'), resize: 'vertical', minHeight: '72px' }}
                  />
                );
              })()}
            </div>

            {/* Consent */}
            <div className="flex items-start gap-[10px] mb-[22px]">
              <input
                type="checkbox"
                id="qmConsent"
                {...register('consent', { required: 'You must agree to continue.' })}
                className="mt-[3px] flex-shrink-0 cursor-pointer accent-[color:var(--orange)]"
                style={{
                  width: '15px',
                  height: '15px',
                  outline: errors.consent ? '2px solid #E24B4A' : 'none',
                }}
              />
              <div>
                <label htmlFor="qmConsent" className="cursor-pointer text-[12px] text-muted leading-[1.55]">
                  I agree to be contacted by Energyex about my enquiry, in line with the{' '}
                  <Link href="/privacy" className="text-brand-orange hover:underline">
                    privacy policy
                  </Link>
                  .
                </label>
                {errors.consent && (
                  <p className="mt-1 text-[11.5px] text-[#C0392B]">{errors.consent.message}</p>
                )}
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-brand-orange text-white border-none py-[15px] rounded-rs text-[15px] font-bold transition-all duration-200 shadow-[0_8px_24px_rgba(232,98,10,0.3)] ${
                isSubmitting
                  ? 'opacity-70 cursor-not-allowed'
                  : 'cursor-pointer hover:bg-[#CC5208]'
              }`}
            >
              {isSubmitting ? 'Sending…' : 'Get My Free Quote →'}
            </button>

            {/* API-level error */}
            {apiError && (
              <p className="mt-3 text-center text-[13px] font-semibold text-[#C0392B]">{apiError}</p>
            )}

            {/* Trust line */}
            <div className="flex items-center justify-center gap-[8px] mt-[14px] text-[12px] text-muted">
              <ShieldCheck size={13} className="flex-shrink-0" />
              Your details are kept secure and never shared with third parties.
            </div>
          </form>
        ) : (
          /* Success state */
          <div className="px-[38px] py-[50px] text-center">
            <div className="w-[64px] h-[64px] rounded-full bg-[#E6F6EF] text-[#0A8A5A] flex items-center justify-center mx-auto mb-[20px]">
              <Check size={28} strokeWidth={2.5} />
            </div>
            <h3 className="font-serif-num text-[24px] font-semibold text-ink mb-[10px]">
              Thanks — we&apos;ve got it.
            </h3>
            <p className="text-[14px] text-muted leading-[1.7] max-w-[360px] mx-auto">
              One of our team will review your details and be in touch shortly with your free,
              no-obligation quote.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
