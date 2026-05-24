"use client";

import { useState } from "react";
import { Plus, Edit2, Trash2, BookOpen } from "lucide-react";
import Link from "next/link";
import UniversityFormModal from "./UniversityFormModal";
import { createUniversity, updateUniversity, deleteUniversity } from "./actions";

export default function UniversitiesAdminClient({ initialData }: { initialData: any[] }) {
  const [universities, setUniversities] = useState(initialData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingData, setEditingData] = useState<any>(null);

  const handleOpenNew = () => {
    setEditingData(null);
    setIsModalOpen(true);
  };

  const handleOpenEdit = (uni: any) => {
    setEditingData(uni);
    setIsModalOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("هل أنت متأكد من حذف هذه الجامعة؟")) return;
    const res = await deleteUniversity(id);
    if (res.success) {
      setUniversities(prev => prev.filter(u => u.id !== id));
    } else {
      alert(res.error);
    }
  };

  const handleSubmit = async (data: any) => {
    let res;
    if (editingData) {
      res = await updateUniversity(editingData.id, data);
    } else {
      res = await createUniversity(data);
    }

    if (res.success && res.university) {
      // Refresh the client list optimistically
      if (editingData) {
        setUniversities(prev => prev.map(u => u.id === res.university!.id ? res.university : u));
      } else {
        setUniversities(prev => [res.university, ...prev]);
      }
      setIsModalOpen(false);
    } else {
      alert(res.error);
    }
  };

  return (
    <div>
      <div className="flex justify-end mb-6">
        <button 
          onClick={handleOpenNew}
          className="flex items-center gap-2 bg-brand-600 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-brand-700 transition"
        >
          <Plus size={20} />
          <span>إضافة جامعة جديدة</span>
        </button>
      </div>

      <div className="overflow-x-auto border border-slate-200 rounded-3xl">
        <table className="w-full text-right">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="p-4 font-semibold text-slate-600">اللوجو</th>
              <th className="p-4 font-semibold text-slate-600">اسم الجامعة</th>
              <th className="p-4 font-semibold text-slate-600">النوع</th>
              <th className="p-4 font-semibold text-slate-600">المحافظة</th>
              <th className="p-4 font-semibold text-slate-600 text-center">إجراءات</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {universities.map(uni => (
              <tr key={uni.id} className="hover:bg-slate-50 transition">
                <td className="p-4">
                  {uni.logoUrl ? (
                    <img src={uni.logoUrl} alt={uni.nameArabic} className="w-12 h-12 object-contain bg-white rounded-lg border p-1" />
                  ) : (
                    <div className="w-12 h-12 bg-slate-200 rounded-lg flex items-center justify-center text-xs text-slate-500">لا يوجد</div>
                  )}
                </td>
                <td className="p-4 font-bold text-slate-900">{uni.nameArabic}</td>
                <td className="p-4 text-slate-600">
                  <span className={`px-2 py-1 rounded-lg text-xs font-bold ${uni.type === "GOVERNMENT" ? "bg-blue-100 text-blue-700" : "bg-purple-100 text-purple-700"}`}>
                    {uni.type === "GOVERNMENT" ? "حكومية" : "خاصة"}
                  </span>
                </td>
                <td className="p-4 text-slate-600">{uni.governorate || uni.location}</td>
                <td className="p-4">
                  <div className="flex items-center justify-center gap-2">
                    <Link href={`/admin/universities/${uni.id}/programs`} className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition" title="إدارة التخصصات والرسوم"><BookOpen size={18} /></Link>
                    <button onClick={() => handleOpenEdit(uni)} className="p-2 text-brand-600 hover:bg-brand-50 rounded-lg transition"><Edit2 size={18} /></button>
                    <button onClick={() => handleDelete(uni.id)} className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition"><Trash2 size={18} /></button>
                  </div>
                </td>
              </tr>
            ))}
            {universities.length === 0 && (
              <tr>
                <td colSpan={5} className="p-8 text-center text-slate-500">لا يوجد جامعات مضافة بعد.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <UniversityFormModal 
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          initialData={editingData}
          onSubmit={handleSubmit}
        />
      )}
    </div>
  );
}
