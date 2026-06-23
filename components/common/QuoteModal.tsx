'use client';

import { useEffect, useState, useRef, DragEvent, ChangeEvent, FormEvent } from 'react';
import { X, Paperclip, FileText, ShieldCheck, ChevronDown, Check } from 'lucide-react';
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

export default function QuoteModal() {
  const { isOpen, closeModal } = useQuoteModal();
  const [submitted, setSubmitted] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  /* Body scroll lock */
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  /* ESC to close */
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') closeModal(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [isOpen, closeModal]);

  /* Reset form when modal closes */
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => { setSubmitted(false); setFiles([]); }, 300);
    }
  }, [isOpen]);

  function addFiles(incoming: FileList | null) {
    if (!incoming) return;
    setFiles((prev) => [...prev, ...Array.from(incoming)]);
  }

  function removeFile(index: number) {
    setFiles((prev) => prev.filter((_, i) => i !== index));
    if (fileInputRef.current) fileInputRef.current.value = '';
  }

  function handleDragOver(e: DragEvent) {
    e.preventDefault();
    setIsDragging(true);
  }

  function handleDragLeave() {
    setIsDragging(false);
  }

  function handleDrop(e: DragEvent) {
    e.preventDefault();
    setIsDragging(false);
    addFiles(e.dataTransfer.files);
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    /* Overlay */
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
        className={`bg-white w-full max-w-[700px] max-h-[92vh] overflow-y-auto relative shadow-[0_16px_50px_rgba(13,27,42,0.12)] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isOpen ? 'translate-y-0 scale-100' : 'translate-y-[18px] scale-[0.98]'
        }`}
      >
        {/* Header */}
        <div className="bg-gradient-to-br from-navy to-navy-2 px-[28px] sm:px-[38px] pt-[34px] pb-[28px] relative overflow-hidden">
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
            Attach a recent bill and we&apos;ll come back with a tailored comparison — usually within one
            working day.
          </p>
        </div>

        {/* Form — hidden when submitted */}
        {!submitted ? (
          <form onSubmit={handleSubmit} className="px-[24px] sm:px-[38px] pt-[30px] pb-[34px]">

            {/* 3-col: name / phone / email */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-[14px] mb-[18px]">
              <div>
                <label className="block text-[12.5px] font-bold text-[#33414F] mb-[7px]">
                  Full name <span className="text-brand-orange">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Jane Smith"
                  className="w-full border-[1.5px] border-border-color rounded-rs px-[14px] py-[12px] text-[14px] text-ink bg-off transition-all focus:outline-none focus:border-brand-orange focus:bg-white focus:shadow-[0_0_0_3px_rgba(232,98,10,0.1)]"
                />
              </div>
              <div>
                <label className="block text-[12.5px] font-bold text-[#33414F] mb-[7px]">
                  Phone number <span className="text-brand-orange">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="07xxx xxxxxx"
                  className="w-full border-[1.5px] border-border-color rounded-rs px-[14px] py-[12px] text-[14px] text-ink bg-off transition-all focus:outline-none focus:border-brand-orange focus:bg-white focus:shadow-[0_0_0_3px_rgba(232,98,10,0.1)]"
                />
              </div>
              <div>
                <label className="block text-[12.5px] font-bold text-[#33414F] mb-[7px]">
                  Email address <span className="text-brand-orange">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="jane@company.com"
                  className="w-full border-[1.5px] border-border-color rounded-rs px-[14px] py-[12px] text-[14px] text-ink bg-off transition-all focus:outline-none focus:border-brand-orange focus:bg-white focus:shadow-[0_0_0_3px_rgba(232,98,10,0.1)]"
                />
              </div>
            </div>

            {/* Service dropdown */}
            <div className="mb-[18px]">
              <label className="block text-[12.5px] font-bold text-[#33414F] mb-[7px]">
                Which service is this about?
              </label>
              <div className="relative">
                <select
                  name="service"
                  className="w-full border-[1.5px] border-border-color rounded-rs px-[14px] py-[12px] text-[14px] text-ink bg-off appearance-none pr-[36px] transition-all focus:outline-none focus:border-brand-orange focus:bg-white focus:shadow-[0_0_0_3px_rgba(232,98,10,0.1)]"
                >
                  <option value="">Select a service</option>
                  {SERVICES.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
                <ChevronDown
                  size={14}
                  className="absolute right-[12px] top-1/2 -translate-y-1/2 text-muted pointer-events-none"
                />
              </div>
            </div>

            {/* File dropzone */}
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
                  onChange={(e: ChangeEvent<HTMLInputElement>) => addFiles(e.target.files)}
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

              {/* File list */}
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
                        className="text-muted font-bold flex-shrink-0 ml-[10px] hover:text-[#C24545] transition-colors bg-none border-none text-[13px]"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Notes */}
            <div className="mb-[18px]">
              <label className="block text-[12.5px] font-bold text-[#33414F] mb-[7px]">
                Anything else we should know?{' '}
                <span className="text-muted font-normal">(optional)</span>
              </label>
              <textarea
                name="message"
                placeholder="e.g. 3 sites, contract renews in March..."
                rows={3}
                className="w-full border-[1.5px] border-border-color rounded-rs px-[14px] py-[12px] text-[14px] text-ink bg-off resize-y min-h-[72px] transition-all focus:outline-none focus:border-brand-orange focus:bg-white focus:shadow-[0_0_0_3px_rgba(232,98,10,0.1)]"
              />
            </div>

            {/* Consent */}
            <div className="flex items-start gap-[10px] mb-[22px]">
              <input
                type="checkbox"
                id="qmConsent"
                required
                className="mt-[3px] flex-shrink-0 w-[15px] h-[15px] accent-brand-orange"
              />
              <label htmlFor="qmConsent" className="text-[12px] text-muted leading-[1.55]">
                I agree to be contacted by Energyex about my enquiry, in line with the{' '}
                <Link href="/privacy" className="text-brand-orange hover:underline">
                  privacy policy
                </Link>
                .
              </label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-brand-orange text-white border-none py-[15px] rounded-rs text-[15px] font-bold cursor-pointer transition-all duration-200 shadow-[0_8px_24px_rgba(232,98,10,0.3)] hover:bg-[#CC5208]"
            >
              Get My Free Quote →
            </button>

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
