"use client";

import { useState } from "react";
import { Plus, Edit2, Trash2, X, Check, DollarSign } from "lucide-react";

export type Discount = {
  id: string; minGPA: number; maxGPA: number; discountAmount: number;
  discountType: string; labelArabic: string; appliesTo: string;
};

export default function DiscountForm({
  programId, initial, onSave, onCancel
}: {
  programId: string; initial?: Partial<Discount>; onSave: (d: any) => void; onCancel: () => void;
}) {
  const [form, setForm] = useState({
    minGPA: initial?.minGPA?.toString() || "",
    maxGPA: initial?.maxGPA?.toString() || "",
    discountAmount: initial?.discountAmount?.toString() || "",
    discountType: initial?.discountType || "PERCENTAGE",
    labelArabic: initial?.labelArabic || "",
    appliesTo: initial?.appliesTo || "JORDANIAN"
  });

  return (
    <div className="bg-slate-50 border border-brand-200 rounded-2xl p-4 mt-2 space-y-3">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <div><label className="text-xs font-bold text-slate-600 block mb-1">الحد الأدنى للمعدل (٪)</label>
          <input type="number" className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm" value={form.minGPA} onChange={e => setForm(p => ({ ...p, minGPA: e.target.value }))} placeholder="60" /></div>
        <div><label className="text-xs font-bold text-slate-600 block mb-1">الحد الأعلى للمعدل (٪)</label>
          <input type="number" className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm" value={form.maxGPA} onChange={e => setForm(p => ({ ...p, maxGPA: e.target.value }))} placeholder="89.9" /></div>
        <div><label className="text-xs font-bold text-slate-600 block mb-1">نسبة الخصم (٪)</label>
          <input type="number" className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm" value={form.discountAmount} onChange={e => setForm(p => ({ ...p, discountAmount: e.target.value }))} placeholder="مثال: 30" /></div>
        <div><label className="text-xs font-bold text-slate-600 block mb-1">نوع الخصم</label>
          <select className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm" value={form.discountType} onChange={e => setForm(p => ({ ...p, discountType: e.target.value }))} disabled>
            <option value="PERCENTAGE">نسبة مئوية (٪)</option>
          </select></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div><label className="text-xs font-bold text-slate-600 block mb-1">البيان (اختياري)</label>
          <input className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm" value={form.labelArabic} onChange={e => setForm(p => ({ ...p, labelArabic: e.target.value }))} placeholder="مثال: خصم للمعدل 60-89.9%" /></div>
        <div><label className="text-xs font-bold text-slate-600 block mb-1">ينطبق على</label>
          <select className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm" value={form.appliesTo} onChange={e => setForm(p => ({ ...p, appliesTo: e.target.value }))}>
            <option value="JORDANIAN">الطلبة الأردنيين فقط</option>
            <option value="INTERNATIONAL">الطلبة الوافدين فقط</option>
            <option value="BOTH">كلا الفئتين</option>
          </select></div>
      </div>
      <div className="flex gap-2 justify-end pt-2 border-t border-brand-100">
        <button onClick={onCancel} className="px-4 py-2 rounded-xl text-sm font-bold text-slate-600 hover:bg-slate-200 transition flex items-center gap-1"><X size={14} />إلغاء</button>
        <button onClick={() => onSave(form)} className="px-4 py-2 rounded-xl bg-brand-500 text-slate-900 text-sm font-bold hover:bg-brand-600 transition flex items-center gap-1"><Check size={14} />حفظ التخفيض</button>
      </div>
    </div>
  );
}
