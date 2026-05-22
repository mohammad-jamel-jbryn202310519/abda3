"use client";

import { useState } from "react";
import { X, Upload, Plus, Trash2 } from "lucide-react";

export default function UniversityFormModal({ 
  isOpen, 
  onClose, 
  initialData, 
  onSubmit 
}: { 
  isOpen: boolean; 
  onClose: () => void; 
  initialData?: any; 
  onSubmit: (data: any) => Promise<void>; 
}) {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState(initialData || {
    nameArabic: "",
    nameEnglish: "",
    type: "GOVERNMENT",
    location: "",
    governorate: "",
    googleMapsUrl: "",
    tuitionFees: "",
    logoUrl: "",
    gallery: [] as string[],
    degrees: [] as string[],
    requiredDocuments: [] as string[]
  });

  const [reqDocsText, setReqDocsText] = useState(initialData?.requiredDocuments?.join("\n") || "");
  const [logoFile, setLogoFile] = useState<File | null>(null);
  const [galleryFiles, setGalleryFiles] = useState<File[]>([]);

  if (!isOpen) return null;

  const handleDegreeToggle = (deg: string) => {
    setFormData((prev: any) => ({
      ...prev,
      degrees: prev.degrees.includes(deg) 
        ? prev.degrees.filter((d: string) => d !== deg)
        : [...prev.degrees, deg]
    }));
  };

  const handleUpload = async (file: File, type: string) => {
    const fd = new FormData();
    fd.append("file", file);
    fd.append("type", type);
    const res = await fetch("/api/upload", { method: "POST", body: fd });
    if (!res.ok) throw new Error("Upload failed");
    const { url } = await res.json();
    return url;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const dataToSubmit = { ...formData };
      
      if (reqDocsText) {
        dataToSubmit.requiredDocuments = reqDocsText.split("\n").map((s: string) => s.trim()).filter(Boolean);
      } else {
        dataToSubmit.requiredDocuments = [];
      }

      if (logoFile) {
        dataToSubmit.logoUrl = await handleUpload(logoFile, "logo");
      }

      if (galleryFiles.length > 0) {
        const uploadedUrls = await Promise.all(galleryFiles.map(f => handleUpload(f, "uploads")));
        dataToSubmit.gallery = [...dataToSubmit.gallery, ...uploadedUrls];
      }

      await onSubmit(dataToSubmit);
    } catch (error) {
      console.error(error);
      alert("حدث خطأ أثناء الحفظ أو الرفع.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl w-full max-w-4xl shadow-xl my-8">
        <div className="flex items-center justify-between p-6 border-b border-slate-100">
          <h2 className="text-xl font-bold text-slate-900">{initialData ? "تعديل بيانات الجامعة" : "إضافة جامعة جديدة"}</h2>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-slate-100"><X size={20} /></button>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <label className="block text-sm font-semibold text-slate-700">
            الاسم (عربي) *
            <input required type="text" value={formData.nameArabic} onChange={e => setFormData({...formData, nameArabic: e.target.value})} className="mt-2 w-full px-4 py-2 border border-slate-200 rounded-xl outline-none focus:border-brand-500" />
          </label>
          <label className="block text-sm font-semibold text-slate-700">
            الاسم (إنجليزي) *
            <input required type="text" value={formData.nameEnglish} onChange={e => setFormData({...formData, nameEnglish: e.target.value})} className="mt-2 w-full px-4 py-2 border border-slate-200 rounded-xl outline-none focus:border-brand-500" />
          </label>
          <label className="block text-sm font-semibold text-slate-700">
            النوع *
            <select required value={formData.type} onChange={e => setFormData({...formData, type: e.target.value})} className="mt-2 w-full px-4 py-2 border border-slate-200 rounded-xl outline-none focus:border-brand-500">
              <option value="GOVERNMENT">حكومية</option>
              <option value="PRIVATE">خاصة</option>
            </select>
          </label>
          <label className="block text-sm font-semibold text-slate-700">
            المحافظة
            <input type="text" value={formData.governorate} onChange={e => setFormData({...formData, governorate: e.target.value})} className="mt-2 w-full px-4 py-2 border border-slate-200 rounded-xl outline-none focus:border-brand-500" />
          </label>

          <div className="md:col-span-2">
            <label className="block text-sm font-semibold text-slate-700 mb-2">لوجو الجامعة</label>
            <div className="flex items-center gap-4">
              {formData.logoUrl && <img src={formData.logoUrl} alt="Logo" className="w-16 h-16 object-contain border rounded-xl p-1" />}
              <input type="file" accept="image/*" onChange={e => setLogoFile(e.target.files?.[0] || null)} className="text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-brand-50 file:text-brand-700 hover:file:bg-brand-100" />
            </div>
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-semibold text-slate-700 mb-2">صور إضافية (Gallery)</label>
            <div className="flex flex-wrap gap-2 mb-2">
              {formData.gallery.map((url: string, i: number) => (
                <div key={i} className="relative w-20 h-20 border rounded-xl overflow-hidden group">
                  <img src={url} alt="Gallery" className="w-full h-full object-cover" />
                  <button type="button" onClick={() => setFormData({...formData, gallery: formData.gallery.filter((_: string, idx: number) => idx !== i)})} className="absolute inset-0 bg-red-500/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition"><Trash2 className="text-white" size={20} /></button>
                </div>
              ))}
            </div>
            <input type="file" multiple accept="image/*" onChange={e => setGalleryFiles(Array.from(e.target.files || []))} className="text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-brand-50 file:text-brand-700 hover:file:bg-brand-100" />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-semibold text-slate-700 mb-2">الدرجات العلمية</label>
            <div className="flex gap-4">
              {["بكالوريوس", "ماجستير", "دكتوراة"].map(deg => (
                <label key={deg} className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" checked={formData.degrees.includes(deg)} onChange={() => handleDegreeToggle(deg)} className="w-4 h-4 text-brand-600 rounded focus:ring-brand-500" />
                  <span className="text-slate-700">{deg}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-semibold text-slate-700">
              أسعار التخصصات والرسوم
              <textarea rows={4} value={formData.tuitionFees} onChange={e => setFormData({...formData, tuitionFees: e.target.value})} className="mt-2 w-full px-4 py-2 border border-slate-200 rounded-xl outline-none focus:border-brand-500" placeholder="اكتب الرسوم بالتفصيل هنا..."></textarea>
            </label>
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-semibold text-slate-700">
              الأوراق المطلوبة للتسجيل (كل ورقة في سطر جديد)
              <textarea rows={4} value={reqDocsText} onChange={e => setReqDocsText(e.target.value)} className="mt-2 w-full px-4 py-2 border border-slate-200 rounded-xl outline-none focus:border-brand-500" placeholder="صورة الجواز&#10;شهادة الثانوية..."></textarea>
            </label>
          </div>

          <div className="md:col-span-2 flex justify-end gap-3 mt-4 pt-6 border-t border-slate-100">
            <button type="button" onClick={onClose} className="px-6 py-2.5 rounded-full text-slate-600 font-semibold hover:bg-slate-100 transition">إلغاء</button>
            <button type="submit" disabled={loading} className="px-6 py-2.5 rounded-full bg-brand-600 text-white font-semibold hover:bg-brand-700 transition disabled:opacity-50">
              {loading ? "جاري الحفظ..." : "حفظ الجامعة"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
