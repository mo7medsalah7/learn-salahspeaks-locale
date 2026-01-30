import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:4000';

const Enroll: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const [searchParams] = useSearchParams();
  const course = searchParams.get('course') || '';

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const { toast } = useToast();
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    try {
      const res = await fetch(`${API_BASE}/api/enroll`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone, course, message }),
      });

      if (!res.ok) throw new Error('Failed to send');

      toast({ title: isRTL ? 'تم الإرسال' : 'Sent', description: isRTL ? 'تم استلام طلب التسجيل' : 'Enrollment request received' });
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
    } catch (err) {
      console.error(err);
      toast({ title: isRTL ? 'خطأ' : 'Error', description: isRTL ? 'فشل إرسال الطلب' : 'Failed to submit enrollment' });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background py-16">
      <div className="w-full max-w-2xl bg-card rounded-2xl shadow-lg border border-border p-8">
        <h2 className="text-2xl font-bold mb-4">{isRTL ? 'نموذج التسجيل' : 'Enrollment Form'}</h2>
        {course && <p className="text-sm text-muted-foreground mb-4">{isRTL ? `الدورة: ${course}` : `Course: ${course}`}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">{isRTL ? 'الاسم' : 'Full Name'}</label>
            <input required value={name} onChange={(e) => setName(e.target.value)} className="w-full px-3 py-2 rounded-md border border-border bg-input" />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">{isRTL ? 'البريد الإلكتروني' : 'Email'}</label>
            <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-3 py-2 rounded-md border border-border bg-input" />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">{isRTL ? 'الهاتف' : 'Phone'}</label>
            <input value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full px-3 py-2 rounded-md border border-border bg-input" />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">{isRTL ? 'رسالة' : 'Message'}</label>
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} className="w-full px-3 py-2 rounded-md border border-border bg-input" rows={4} />
          </div>

          <div className="flex items-center justify-end gap-3">
            <Button type="submit" variant="default" disabled={isSending}>{isSending ? (isRTL ? 'جاري الإرسال...' : 'Sending...') : (isRTL ? 'إرسال' : 'Send')}</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Enroll;
