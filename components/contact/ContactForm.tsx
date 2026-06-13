'use client';

import { useState, useRef } from 'react';
import { Send, Lock, MessageSquare, Paperclip, X, CheckCircle } from 'lucide-react';

const SERVICE_OPTIONS = [
  'Electricity Procurement',
  'Gas Procurement',
  'Water Procurement',
  'Waste Procurement',
  'Cleaning Services',
  'Multiple Services',
  'General Enquiry',
];

const REQUIRED_FIELDS = ['firstName', 'lastName', 'email', 'service', 'message'] as const;
type RequiredField = (typeof REQUIRED_FIELDS)[number];

const MAX_FILES = 5;
const MAX_SIZE = 10 * 1024 * 1024;
const ALLOWED_EXT = [
  'pdf','jpg','jpeg','png','heic','heif','webp','tiff','tif',
  'doc','docx','xls','xlsx','csv',
];

function getExt(name: string) {
  return name.split('.').pop()?.toLowerCase() ?? '';
}

function fileBadge(name: string): { bg: string; label: string } {
  const e = getExt(name);
  if (e === 'pdf') return { bg: '#C0392B', label: 'PDF' };
  if (['jpg','jpeg','png','heic','heif','webp','tiff','tif'].includes(e))
    return { bg: '#2E8B6B', label: e === 'jpeg' ? 'JPG' : e.toUpperCase() };
  if (['doc','docx'].includes(e)) return { bg: '#2A5699', label: 'DOC' };
  if (['xls','xlsx'].includes(e)) return { bg: '#1D6F42', label: 'XLS' };
  if (e === 'csv') return { bg: '#5C6A7A', label: 'CSV' };
  return { bg: '#475569', label: e.toUpperCase() };
}

function fileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)} KB`;
  return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
}

const inputBase: React.CSSProperties = {
  width: '100%',
  fontFamily: 'inherit',
  fontSize: '14.5px',
  color: 'var(--ink)',
  background: 'var(--off)',
  border: '1.5px solid var(--border)',
  borderRadius: 'var(--rs)',
  padding: '11px 14px',
  outline: 'none',
  transition: 'border-color 0.25s, box-shadow 0.25s, background 0.25s',
  appearance: 'none' as const,
};

const inputFocusStyle = {
  borderColor: 'var(--orange)',
  background: '#fff',
  boxShadow: '0 0 0 3px rgba(232,98,10,0.10)',
};

const inputErrorStyle = {
  borderColor: '#E24B4A',
  boxShadow: '0 0 0 3px rgba(226,75,74,0.12)',
};

export default function ContactForm() {
  const [values, setValues] = useState({
    firstName: '', lastName: '', email: '',
    phone: '', company: '', service: '', message: '',
  });
  const [errors, setErrors] = useState<Set<string>>(new Set());
  const [focused, setFocused] = useState<string | null>(null);
  const [consent, setConsent] = useState(false);
  const [consentError, setConsentError] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const [fileError, setFileError] = useState('');
  const [dragging, setDragging] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  function update(field: string, val: string) {
    setValues((v) => ({ ...v, [field]: val }));
    if (errors.has(field)) {
      setErrors((e) => { const n = new Set(e); n.delete(field); return n; });
    }
  }

  function addFiles(list: FileList | null) {
    if (!list) return;
    setFileError('');
    const incoming = Array.from(list);
    setFiles((prev) => {
      const next = [...prev];
      for (const f of incoming) {
        if (next.length >= MAX_FILES) { setFileError(`You can attach up to ${MAX_FILES} files.`); break; }
        if (!ALLOWED_EXT.includes(getExt(f.name))) { setFileError(`"${f.name}" is not a supported file type.`); continue; }
        if (f.size > MAX_SIZE) { setFileError(`"${f.name}" exceeds 10MB.`); continue; }
        if (next.some((x) => x.name === f.name && x.size === f.size)) continue;
        next.push(f);
      }
      return next;
    });
  }

  function removeFile(i: number) {
    setFiles((f) => f.filter((_, idx) => idx !== i));
    setFileError('');
  }

  function handleSubmit() {
    const newErrors = new Set<string>();
    for (const field of REQUIRED_FIELDS) {
      if (!values[field as RequiredField].trim()) newErrors.add(field);
    }
    const needsConsent = !consent;
    setConsentError(needsConsent);
    if (newErrors.size > 0) { setErrors(newErrors); return; }
    if (needsConsent) return;
    setSubmitted(true);
  }

  function fieldStyle(field: string): React.CSSProperties {
    const hasError = errors.has(field);
    const isFocused = focused === field;
    return {
      ...inputBase,
      ...(isFocused && !hasError ? inputFocusStyle : {}),
      ...(hasError ? inputErrorStyle : {}),
    };
  }

  if (submitted) {
    return (
      <div
        className="bg-white overflow-hidden"
        style={{ borderRadius: 'var(--r)', boxShadow: 'var(--sh)', border: '1px solid rgba(13,27,42,0.07)' }}
      >
        {/* Form header */}
        <div className="flex items-center gap-[14px]" style={{ background: 'var(--navy)', padding: '24px 32px' }}>
          <div
            className="w-[42px] h-[42px] rounded-[10px] flex items-center justify-center flex-shrink-0"
            style={{ background: 'rgba(232,98,10,0.2)' }}
          >
            <MessageSquare size={22} style={{ color: 'var(--orange-soft)', strokeWidth: 2 }} />
          </div>
          <div>
            <h2 className="font-serif-num text-white" style={{ fontSize: '22px', fontWeight: 600 }}>
              Your Enquiry
            </h2>
            <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.55)', marginTop: '2px' }}>
              We typically respond same business day
            </p>
          </div>
        </div>

        {/* Success body */}
        <div className="text-center" style={{ padding: '40px 32px' }}>
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
            style={{ background: '#EAF7EE' }}
          >
            <CheckCircle size={30} style={{ color: '#28A745', strokeWidth: 2.5 }} />
          </div>
          <h3 className="font-serif-num mb-[10px]" style={{ fontSize: '26px', fontWeight: 600, color: 'var(--ink)' }}>
            Message Received!
          </h3>
          <p style={{ fontSize: '14.5px', color: 'var(--muted)', lineHeight: 1.7 }}>
            Thank you for getting in touch. One of our energy specialists will reach out within 24
            hours — usually the same business day.
            <br />
            <br />
            In the meantime, feel free to call us on{' '}
            <strong style={{ color: 'var(--ink)' }}>0203 727 2588</strong>.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="bg-white overflow-hidden"
      style={{ borderRadius: 'var(--r)', boxShadow: 'var(--sh)', border: '1px solid rgba(13,27,42,0.07)' }}
    >
      {/* Form header */}
      <div className="flex items-center gap-[14px]" style={{ background: 'var(--navy)', padding: '24px 32px' }}>
        <div
          className="w-[42px] h-[42px] rounded-[10px] flex items-center justify-center flex-shrink-0"
          style={{ background: 'rgba(232,98,10,0.2)' }}
        >
          <MessageSquare size={22} style={{ color: 'var(--orange-soft)', strokeWidth: 2 }} />
        </div>
        <div>
          <h2 className="font-serif-num text-white" style={{ fontSize: '22px', fontWeight: 600 }}>
            Your Enquiry
          </h2>
          <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.55)', marginTop: '2px' }}>
            We typically respond same business day
          </p>
        </div>
      </div>

      {/* Form body */}
      <div style={{ padding: '32px' }}>

        {/* Row 1: Name */}
        <div className="grid gap-4 mb-4" style={{ gridTemplateColumns: '1fr 1fr' }}>
          {(['firstName', 'lastName'] as const).map((f, i) => (
            <div key={f}>
              <label
                className="block font-semibold uppercase mb-[7px]"
                style={{ fontSize: '12.5px', color: 'var(--ink)', letterSpacing: '0.2px' }}
              >
                {i === 0 ? 'First Name' : 'Last Name'}{' '}
                <span style={{ color: 'var(--orange)' }}>*</span>
              </label>
              <input
                type="text"
                placeholder={i === 0 ? 'e.g. Sarah' : 'e.g. Johnson'}
                value={values[f]}
                onChange={(e) => update(f, e.target.value)}
                onFocus={() => setFocused(f)}
                onBlur={() => setFocused(null)}
                style={fieldStyle(f)}
              />
            </div>
          ))}
        </div>

        {/* Row 2: Email + Phone */}
        <div className="grid gap-4 mb-4" style={{ gridTemplateColumns: '1fr 1fr' }}>
          <div>
            <label
              className="block font-semibold uppercase mb-[7px]"
              style={{ fontSize: '12.5px', color: 'var(--ink)', letterSpacing: '0.2px' }}
            >
              Email Address <span style={{ color: 'var(--orange)' }}>*</span>
            </label>
            <input
              type="email"
              placeholder="you@company.co.uk"
              value={values.email}
              onChange={(e) => update('email', e.target.value)}
              onFocus={() => setFocused('email')}
              onBlur={() => setFocused(null)}
              style={fieldStyle('email')}
            />
          </div>
          <div>
            <label
              className="block font-semibold uppercase mb-[7px]"
              style={{ fontSize: '12.5px', color: 'var(--ink)', letterSpacing: '0.2px' }}
            >
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="e.g. 07700 900 123"
              value={values.phone}
              onChange={(e) => update('phone', e.target.value)}
              onFocus={() => setFocused('phone')}
              onBlur={() => setFocused(null)}
              style={{ ...inputBase, ...(focused === 'phone' ? inputFocusStyle : {}) }}
            />
          </div>
        </div>

        {/* Row 3: Company + Service */}
        <div className="grid gap-4 mb-4" style={{ gridTemplateColumns: '1fr 1fr' }}>
          <div>
            <label
              className="block font-semibold uppercase mb-[7px]"
              style={{ fontSize: '12.5px', color: 'var(--ink)', letterSpacing: '0.2px' }}
            >
              Company Name
            </label>
            <input
              type="text"
              placeholder="Your organisation"
              value={values.company}
              onChange={(e) => update('company', e.target.value)}
              onFocus={() => setFocused('company')}
              onBlur={() => setFocused(null)}
              style={{ ...inputBase, ...(focused === 'company' ? inputFocusStyle : {}) }}
            />
          </div>
          <div>
            <label
              className="block font-semibold uppercase mb-[7px]"
              style={{ fontSize: '12.5px', color: 'var(--ink)', letterSpacing: '0.2px' }}
            >
              Service Interest <span style={{ color: 'var(--orange)' }}>*</span>
            </label>
            <div className="relative">
              <select
                value={values.service}
                onChange={(e) => update('service', e.target.value)}
                onFocus={() => setFocused('service')}
                onBlur={() => setFocused(null)}
                style={{ ...fieldStyle('service'), paddingRight: '34px', cursor: 'pointer' }}
              >
                <option value="" disabled>Select a service…</option>
                {SERVICE_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
              {/* Custom arrow */}
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
          </div>
        </div>

        {/* Enquiry textarea */}
        <div className="mb-4">
          <label
            className="block font-semibold uppercase mb-[7px]"
            style={{ fontSize: '12.5px', color: 'var(--ink)', letterSpacing: '0.2px' }}
          >
            Your Enquiry <span style={{ color: 'var(--orange)' }}>*</span>
          </label>
          <textarea
            placeholder="Tell us about your energy usage, number of sites, current supplier, or anything else that would help us assist you…"
            value={values.message}
            onChange={(e) => update('message', e.target.value)}
            onFocus={() => setFocused('message')}
            onBlur={() => setFocused(null)}
            rows={5}
            style={{ ...fieldStyle('message'), resize: 'vertical', minHeight: '118px' }}
          />
        </div>

        {/* File attachment */}
        <div className="mb-4">
          <label
            className="block font-semibold uppercase mb-[7px]"
            style={{ fontSize: '12.5px', color: 'var(--ink)', letterSpacing: '0.2px' }}
          >
            Attach Your Bill{' '}
            <span style={{ color: 'var(--muted)', fontWeight: 500, textTransform: 'none', letterSpacing: 0 }}>
              (optional — helps us quote faster)
            </span>
          </label>

          {/* Drop zone */}
          <div
            className="rounded-[var(--rs)] cursor-pointer transition-all duration-250"
            style={{
              border: `1.5px dashed ${dragging ? 'var(--orange)' : 'var(--border-strong)'}`,
              background: dragging ? 'var(--orange-tint)' : 'var(--off)',
              padding: '20px 18px',
            }}
            onClick={() => fileRef.current?.click()}
            onDragEnter={(e) => { e.preventDefault(); setDragging(true); }}
            onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
            onDragLeave={() => setDragging(false)}
            onDrop={(e) => {
              e.preventDefault();
              setDragging(false);
              addFiles(e.dataTransfer.files);
            }}
          >
            <input
              ref={fileRef}
              type="file"
              hidden
              multiple
              accept=".pdf,.jpg,.jpeg,.png,.heic,.heif,.webp,.tiff,.tif,.doc,.docx,.xls,.xlsx,.csv"
              onChange={(e) => { addFiles(e.target.files); e.target.value = ''; }}
            />
            <div className="flex items-center justify-center gap-3">
              <div
                className="w-10 h-10 rounded-[var(--rs)] flex items-center justify-center flex-shrink-0"
                style={{ background: dragging ? 'rgba(232,98,10,0.18)' : 'var(--orange-tint)' }}
              >
                <Paperclip size={20} style={{ color: 'var(--orange)' }} />
              </div>
              <div>
                <div className="font-semibold" style={{ fontSize: '13.5px', color: 'var(--ink)' }}>
                  <span style={{ color: 'var(--orange)', textDecoration: 'underline' }}>Click to attach</span>{' '}
                  or drag &amp; drop
                </div>
                <div style={{ fontSize: '11.5px', color: 'var(--muted)', marginTop: '2px' }}>
                  PDF, JPG, PNG, HEIC, DOCX, XLSX, CSV · up to 10MB each · max 5 files
                </div>
              </div>
            </div>
          </div>

          {/* File list */}
          {files.length > 0 && (
            <div className="flex flex-col gap-2 mt-3">
              {files.map((f, i) => {
                const { bg, label } = fileBadge(f.name);
                return (
                  <div
                    key={`${f.name}-${i}`}
                    className="flex items-center gap-[10px] bg-white rounded-[var(--rs)]"
                    style={{ border: '1px solid var(--border)', padding: '9px 12px' }}
                  >
                    <div
                      className="w-[34px] h-[34px] flex-shrink-0 flex items-center justify-center rounded-[6px] text-white font-bold"
                      style={{ fontSize: '9.5px', letterSpacing: '0.3px', background: bg }}
                    >
                      {label}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div
                        className="font-semibold truncate"
                        style={{ fontSize: '13px', color: 'var(--ink)' }}
                      >
                        {f.name}
                      </div>
                      <div style={{ fontSize: '11px', color: 'var(--muted)', marginTop: '1px' }}>
                        {fileSize(f.size)}
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={(e) => { e.stopPropagation(); removeFile(i); }}
                      className="w-[26px] h-[26px] flex-shrink-0 flex items-center justify-center rounded-full transition-colors duration-200 hover:bg-[#FADBD8] hover:text-[#C0392B]"
                      style={{ background: 'var(--off)', color: 'var(--muted)', border: 'none', cursor: 'pointer' }}
                    >
                      <X size={13} />
                    </button>
                  </div>
                );
              })}
            </div>
          )}

          {fileError && (
            <p style={{ fontSize: '12px', color: '#C0392B', marginTop: '8px' }}>{fileError}</p>
          )}
        </div>

        {/* Consent */}
        <div className="flex items-start gap-[10px] mb-5">
          <input
            type="checkbox"
            id="consent"
            checked={consent}
            onChange={(e) => { setConsent(e.target.checked); setConsentError(false); }}
            className="flex-shrink-0 mt-0.5 cursor-pointer accent-[color:var(--orange)]"
            style={{
              width: '17px',
              height: '17px',
              outline: consentError ? '2px solid #E24B4A' : 'none',
            }}
          />
          <label
            htmlFor="consent"
            className="cursor-pointer"
            style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.5 }}
          >
            I agree to Energyex processing my data to respond to this enquiry. View our{' '}
            <a href="/privacy-policy" style={{ color: 'var(--orange)' }}>
              Privacy Policy
            </a>{' '}
            and{' '}
            <a href="/complaints" style={{ color: 'var(--orange)' }}>
              Complaints Procedure
            </a>
            .
          </label>
        </div>

        {/* Submit */}
        <button
          type="button"
          onClick={handleSubmit}
          className="w-full flex items-center justify-center gap-[10px] font-bold transition-all duration-250 hover:-translate-y-0.5"
          style={{
            background: 'var(--orange)',
            color: '#fff',
            fontSize: '15px',
            letterSpacing: '0.3px',
            border: 'none',
            cursor: 'pointer',
            padding: '14px 24px',
            borderRadius: 'var(--rs)',
            boxShadow: '0 4px 16px rgba(232,98,10,0.30)',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--orange-soft)')}
          onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--orange)')}
        >
          Send My Enquiry
          <Send size={18} strokeWidth={2.2} />
        </button>

        {/* Security note */}
        <div
          className="flex items-center justify-center gap-[6px] mt-3"
          style={{ fontSize: '12px', color: 'var(--faint)' }}
        >
          <Lock size={13} strokeWidth={2} />
          Your data is secure and never sold to third parties
        </div>
      </div>
    </div>
  );
}
