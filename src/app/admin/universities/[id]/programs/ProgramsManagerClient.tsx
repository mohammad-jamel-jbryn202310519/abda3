"use client";

import { useState } from "react";
import {
  Plus, Edit2, Trash2, ChevronDown, ChevronUp, X, Check, BookOpen, DollarSign, Building2
} from "lucide-react";

type Program = {
  id: string; nameArabic: string; nameEnglish: string; degree: string;
  creditHours: number | null; jordanianFeePerHour: number | null;
  internationalFeePerHour: number | null; internationalFeeUnit: string;
};
type Faculty = { id: string; nameArabic: string; nameEnglish: string; programs: Program[]; };
type SemesterFee = {
  id: string; degreeLevel: string; feeType: string; labelArabic: string;
  jordanianAmount: number | null; internationalAmount: number | null;
  internationalUnit: string; isRefundable: boolean;
};

const DEGREE_LABELS: Record<string, string> = {
  BACHELOR: "بكالوريوس", MASTER: "ماجستير", PHD: "دكتوراه", HIGH_DIPLOMA: "دبلوم عالي"
};
const DEGREE_COLORS: Record<string, string> = {
  BACHELOR: "bg-blue-100 text-blue-700", MASTER: "bg-purple-100 text-purple-700",
  PHD: "bg-amber-100 text-amber-700", HIGH_DIPLOMA: "bg-green-100 text-green-700"
};

function ProgramForm({ initial, onSave, onCancel }: { initial?: Partial<Program>; onSave: (d: any) => void; onCancel: () => void; }) {
  const [form, setForm] = useState({
    nameArabic: initial?.nameArabic || "", nameEnglish: initial?.nameEnglish || "",
    degree: initial?.degree || "BACHELOR", creditHours: initial?.creditHours?.toString() || "",
    jordanianFeePerHour: initial?.jordanianFeePerHour?.toString() || "",
    internationalFeePerHour: initial?.internationalFeePerHour?.toString() || "",
    internationalFeeUnit: initial?.internationalFeeUnit || "USD",
  });
  return (
    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 mt-2 space-y-3">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div><label className="text-xs font-bold text-slate-600 block mb-1">اسم التخصص (عربي)*</label>
          <input className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm" value={form.nameArabic} onChange={e => setForm(p => ({ ...p, nameArabic: e.target.value }))} /></div>
        <div><label className="text-xs font-bold text-slate-600 block mb-1">اسم التخصص (إنجليزي)</label>
          <input className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm" value={form.nameEnglish} onChange={e => setForm(p => ({ ...p, nameEnglish: e.target.value }))} /></div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <div><label className="text-xs font-bold text-slate-600 block mb-1">المرحلة</label>
          <select className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm" value={form.degree} onChange={e => setForm(p => ({ ...p, degree: e.target.value }))}>
            {Object.entries(DEGREE_LABELS).map(([v, l]) => <option key={v} value={v}>{l}</option>)}
          </select></div>
        <div><label className="text-xs font-bold text-slate-600 block mb-1">الساعات</label>
          <input type="number" className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm" value={form.creditHours} onChange={e => setForm(p => ({ ...p, creditHours: e.target.value }))} /></div>
        <div><label className="text-xs font-bold text-slate-600 block mb-1">سعر الساعة (أردني JOD)</label>
          <input type="number" className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm" value={form.jordanianFeePerHour} onChange={e => setForm(p => ({ ...p, jordanianFeePerHour: e.target.value }))} /></div>
        <div><label className="text-xs font-bold text-slate-600 block mb-1">سعر الساعة (دولي {form.internationalFeeUnit})</label>
          <div className="flex gap-1">
            <input type="number" className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm" value={form.internationalFeePerHour} onChange={e => setForm(p => ({ ...p, internationalFeePerHour: e.target.value }))} />
            <select className="px-2 py-2 rounded-xl border border-slate-200 text-xs" value={form.internationalFeeUnit} onChange={e => setForm(p => ({ ...p, internationalFeeUnit: e.target.value }))}>
              <option value="USD">USD</option><option value="JOD">JOD</option>
            </select>
          </div></div>
      </div>
      <div className="flex gap-2 justify-end">
        <button onClick={onCancel} className="px-4 py-2 rounded-xl text-sm font-bold text-slate-600 hover:bg-slate-200 transition flex items-center gap-1"><X size={14} />إلغاء</button>
        <button onClick={() => onSave(form)} className="px-4 py-2 rounded-xl bg-brand-500 text-slate-900 text-sm font-bold hover:bg-brand-600 transition flex items-center gap-1"><Check size={14} />حفظ</button>
      </div>
    </div>
  );
}

function SemesterFeeForm({ initial, onSave, onCancel }: { initial?: Partial<SemesterFee>; onSave: (d: any) => void; onCancel: () => void; }) {
  const [form, setForm] = useState({
    degreeLevel: initial?.degreeLevel || "BACHELOR",
    feeType: initial?.feeType || "STANDARD_SEMESTER",
    labelArabic: initial?.labelArabic || "",
    jordanianAmount: initial?.jordanianAmount?.toString() || "",
    internationalAmount: initial?.internationalAmount?.toString() || "",
    internationalUnit: initial?.internationalUnit || "USD",
    isRefundable: initial?.isRefundable || false,
  });
  return (
    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 mt-2 space-y-3">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <div><label className="text-xs font-bold text-slate-600 block mb-1">المرحلة الدراسية</label>
          <select className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm" value={form.degreeLevel} onChange={e => setForm(p => ({ ...p, degreeLevel: e.target.value }))}>
            <option value="BACHELOR">بكالوريوس عام</option>
            <option value="BACHELOR_DENTISTRY">بكالوريوس طب أسنان</option>
            <option value="MASTER">ماجستير</option>
            <option value="PHD">دكتوراه</option>
          </select></div>
        <div><label className="text-xs font-bold text-slate-600 block mb-1">نوع الرسم</label>
          <select className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm" value={form.feeType} onChange={e => setForm(p => ({ ...p, feeType: e.target.value }))}>
            <option value="STANDARD_SEMESTER">رسوم فصل نظامي</option>
            <option value="SUMMER_SEMESTER">رسوم فصل صيفي</option>
            <option value="ADMISSION">رسوم التحاق</option>
            <option value="GRADUATION">رسوم تخرج</option>
            <option value="OTHER">أخرى</option>
          </select></div>
        <div><label className="text-xs font-bold text-slate-600 block mb-1">البيان (وصف الرسم)</label>
          <input className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm" value={form.labelArabic} onChange={e => setForm(p => ({ ...p, labelArabic: e.target.value }))} /></div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 items-end">
        <div><label className="text-xs font-bold text-slate-600 block mb-1">المبلغ للأردني (JOD)</label>
          <input type="number" className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm" value={form.jordanianAmount} onChange={e => setForm(p => ({ ...p, jordanianAmount: e.target.value }))} /></div>
        <div><label className="text-xs font-bold text-slate-600 block mb-1">المبلغ للدولي</label>
          <div className="flex gap-1">
            <input type="number" className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm" value={form.internationalAmount} onChange={e => setForm(p => ({ ...p, internationalAmount: e.target.value }))} />
            <select className="px-2 py-2 rounded-xl border border-slate-200 text-xs" value={form.internationalUnit} onChange={e => setForm(p => ({ ...p, internationalUnit: e.target.value }))}>
              <option value="USD">USD</option><option value="JOD">JOD</option>
            </select>
          </div></div>
        <div className="flex items-center gap-2 pt-4">
          <input type="checkbox" id="refundable" checked={form.isRefundable} onChange={e => setForm(p => ({ ...p, isRefundable: e.target.checked }))} className="w-4 h-4 accent-brand-500" />
          <label htmlFor="refundable" className="text-sm font-semibold text-slate-600">مستردة عند التخرج</label>
        </div>
      </div>
      <div className="flex gap-2 justify-end">
        <button onClick={onCancel} className="px-4 py-2 rounded-xl text-sm font-bold text-slate-600 hover:bg-slate-200 transition flex items-center gap-1"><X size={14} />إلغاء</button>
        <button onClick={() => onSave(form)} className="px-4 py-2 rounded-xl bg-brand-500 text-slate-900 text-sm font-bold hover:bg-brand-600 transition flex items-center gap-1"><Check size={14} />حفظ</button>
      </div>
    </div>
  );
}

export default function ProgramsManagerClient({
  universityId, initialFaculties, initialSemesterFees, universityName
}: {
  universityId: string; initialFaculties: Faculty[]; initialSemesterFees: SemesterFee[]; universityName: string;
}) {
  const [faculties, setFaculties] = useState<Faculty[]>(initialFaculties);
  const [semesterFees, setSemesterFees] = useState<SemesterFee[]>(initialSemesterFees);
  const [expandedFaculty, setExpandedFaculty] = useState<string | null>(null);
  const [editingFaculty, setEditingFaculty] = useState<string | null>(null);
  const [addingProgram, setAddingProgram] = useState<string | null>(null);
  const [editingProgram, setEditingProgram] = useState<string | null>(null);
  const [newFacultyName, setNewFacultyName] = useState("");
  const [showNewFacultyInput, setShowNewFacultyInput] = useState(false);
  const [activeTab, setActiveTab] = useState<"programs" | "fees">("programs");
  const [showSemesterFeeForm, setShowSemesterFeeForm] = useState(false);
  const [editingSemesterFee, setEditingSemesterFee] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  // Faculty CRUD
  const handleAddFaculty = async () => {
    if (!newFacultyName.trim()) return;
    setSaving(true);
    const res = await fetch(`/api/universities/${universityId}/faculties`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nameArabic: newFacultyName, nameEnglish: newFacultyName })
    });
    const faculty = await res.json();
    setFaculties(prev => [...prev, { ...faculty, programs: [] }]);
    setNewFacultyName(""); setShowNewFacultyInput(false); setSaving(false);
  };

  const handleDeleteFaculty = async (id: string) => {
    if (!confirm("هل تريد حذف هذه الكلية وجميع تخصصاتها؟")) return;
    await fetch(`/api/faculties/${id}`, { method: "DELETE" });
    setFaculties(prev => prev.filter(f => f.id !== id));
  };

  const handleUpdateFaculty = async (id: string, name: string) => {
    setSaving(true);
    const res = await fetch(`/api/faculties/${id}`, {
      method: "PUT", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nameArabic: name, nameEnglish: name })
    });
    const updated = await res.json();
    setFaculties(prev => prev.map(f => f.id === id ? { ...f, nameArabic: updated.nameArabic } : f));
    setEditingFaculty(null); setSaving(false);
  };

  // Program CRUD
  const handleAddProgram = async (facultyId: string, data: any) => {
    setSaving(true);
    const res = await fetch(`/api/faculties/${facultyId}/programs`, {
      method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data)
    });
    const program = await res.json();
    setFaculties(prev => prev.map(f => f.id === facultyId ? { ...f, programs: [...f.programs, program] } : f));
    setAddingProgram(null); setSaving(false);
  };

  const handleUpdateProgram = async (programId: string, facultyId: string, data: any) => {
    setSaving(true);
    const res = await fetch(`/api/programs/${programId}`, {
      method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data)
    });
    const updated = await res.json();
    setFaculties(prev => prev.map(f => f.id === facultyId
      ? { ...f, programs: f.programs.map(p => p.id === programId ? updated : p) } : f));
    setEditingProgram(null); setSaving(false);
  };

  const handleDeleteProgram = async (programId: string, facultyId: string) => {
    if (!confirm("هل تريد حذف هذا التخصص؟")) return;
    await fetch(`/api/programs/${programId}`, { method: "DELETE" });
    setFaculties(prev => prev.map(f => f.id === facultyId
      ? { ...f, programs: f.programs.filter(p => p.id !== programId) } : f));
  };

  // Semester Fee CRUD
  const handleAddSemesterFee = async (data: any) => {
    setSaving(true);
    const res = await fetch(`/api/universities/${universityId}/semester-fees`, {
      method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data)
    });
    const fee = await res.json();
    setSemesterFees(prev => [...prev, fee]);
    setShowSemesterFeeForm(false); setSaving(false);
  };

  const handleUpdateSemesterFee = async (feeId: string, data: any) => {
    setSaving(true);
    const res = await fetch(`/api/universities/${universityId}/semester-fees`, {
      method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...data, feeId })
    });
    const updated = await res.json();
    setSemesterFees(prev => prev.map(f => f.id === feeId ? updated : f));
    setEditingSemesterFee(null); setSaving(false);
  };

  const handleDeleteSemesterFee = async (feeId: string) => {
    if (!confirm("هل تريد حذف هذا الرسم؟")) return;
    await fetch(`/api/universities/${universityId}/semester-fees`, {
      method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ feeId })
    });
    setSemesterFees(prev => prev.filter(f => f.id !== feeId));
  };

  const degreeLevelLabels: Record<string, string> = {
    BACHELOR: "بكالوريوس عام", BACHELOR_DENTISTRY: "بكالوريوس طب أسنان",
    MASTER: "ماجستير", PHD: "دكتوراه"
  };

  const groupedFees = semesterFees.reduce((acc, fee) => {
    if (!acc[fee.degreeLevel]) acc[fee.degreeLevel] = [];
    acc[fee.degreeLevel].push(fee);
    return acc;
  }, {} as Record<string, SemesterFee[]>);

  return (
    <div className="space-y-6">
      {/* Tabs */}
      <div className="flex gap-2 border-b border-slate-200 pb-0">
        {[["programs", <BookOpen size={16} />, "إدارة التخصصات"], ["fees", <DollarSign size={16} />, "رسوم التسجيل"]].map(([key, icon, label]) => (
          <button key={key as string} onClick={() => setActiveTab(key as "programs" | "fees")}
            className={`flex items-center gap-2 px-5 py-3 text-sm font-bold rounded-t-xl transition border-b-2 ${activeTab === key ? "border-brand-500 text-brand-600 bg-brand-50" : "border-transparent text-slate-500 hover:text-slate-700"}`}>
            {icon as any}{label as string}
          </button>
        ))}
      </div>

      {/* === PROGRAMS TAB === */}
      {activeTab === "programs" && (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <p className="text-sm text-slate-500 font-semibold">{faculties.length} كلية | {faculties.reduce((s, f) => s + f.programs.length, 0)} تخصص</p>
            <button onClick={() => setShowNewFacultyInput(true)}
              className="flex items-center gap-2 bg-brand-500 text-slate-900 px-4 py-2.5 rounded-xl font-bold text-sm hover:bg-brand-600 transition">
              <Plus size={16} />إضافة كلية جديدة
            </button>
          </div>

          {showNewFacultyInput && (
            <div className="flex gap-2 items-center bg-brand-50 border border-brand-200 rounded-2xl p-4">
              <Building2 size={18} className="text-brand-600 shrink-0" />
              <input autoFocus className="flex-1 px-3 py-2 rounded-xl border border-slate-200 text-sm font-semibold"
                placeholder="اسم الكلية بالعربي..." value={newFacultyName}
                onChange={e => setNewFacultyName(e.target.value)}
                onKeyDown={e => e.key === "Enter" && handleAddFaculty()} />
              <button onClick={handleAddFaculty} disabled={saving}
                className="px-4 py-2 bg-brand-500 text-slate-900 rounded-xl font-bold text-sm hover:bg-brand-600 transition">
                {saving ? "..." : "إضافة"}
              </button>
              <button onClick={() => setShowNewFacultyInput(false)}
                className="p-2 text-slate-500 hover:text-red-500 transition"><X size={16} /></button>
            </div>
          )}

          {faculties.map(faculty => {
            const isExpanded = expandedFaculty === faculty.id;
            const isEditing = editingFaculty === faculty.id;
            return (
              <div key={faculty.id} className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
                {/* Faculty Header */}
                <div className="flex items-center gap-3 p-4 bg-slate-50 border-b border-slate-100">
                  <button onClick={() => setExpandedFaculty(isExpanded ? null : faculty.id)}
                    className="flex-1 flex items-center gap-3 text-right">
                    <div className={`p-1.5 rounded-lg transition ${isExpanded ? "bg-brand-500 text-white" : "bg-slate-200 text-slate-600"}`}>
                      {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </div>
                    {isEditing ? (
                      <input autoFocus defaultValue={faculty.nameArabic}
                        onBlur={e => handleUpdateFaculty(faculty.id, e.target.value)}
                        onKeyDown={e => e.key === "Enter" && handleUpdateFaculty(faculty.id, (e.target as HTMLInputElement).value)}
                        className="flex-1 px-3 py-1.5 rounded-xl border border-brand-300 text-sm font-bold" />
                    ) : (
                      <span className="flex-1 font-black text-slate-900 text-base text-right">{faculty.nameArabic}</span>
                    )}
                    <span className="text-xs text-slate-400 font-semibold">{faculty.programs.length} تخصص</span>
                  </button>
                  <button onClick={() => setEditingFaculty(isEditing ? null : faculty.id)}
                    className="p-2 text-slate-400 hover:text-brand-600 hover:bg-brand-50 rounded-lg transition">
                    <Edit2 size={15} />
                  </button>
                  <button onClick={() => handleDeleteFaculty(faculty.id)}
                    className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition">
                    <Trash2 size={15} />
                  </button>
                </div>

                {/* Faculty Programs */}
                {isExpanded && (
                  <div className="p-4 space-y-2">
                    {faculty.programs.length > 0 ? (
                      <div className="overflow-x-auto rounded-xl border border-slate-100">
                        <table className="w-full text-sm">
                          <thead className="bg-slate-50 border-b border-slate-100">
                            <tr className="text-right">
                              <th className="px-4 py-3 font-bold text-slate-600">التخصص</th>
                              <th className="px-4 py-3 font-bold text-slate-600 text-center">المرحلة</th>
                              <th className="px-4 py-3 font-bold text-slate-600 text-center">الساعات</th>
                              <th className="px-4 py-3 font-bold text-slate-600 text-center">أردني (JOD)</th>
                              <th className="px-4 py-3 font-bold text-slate-600 text-center">دولي</th>
                              <th className="px-4 py-3 font-bold text-slate-600 text-center">إجراء</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-50">
                            {faculty.programs.map(program => (
                              <>
                                <tr key={program.id} className="hover:bg-slate-50/50">
                                  <td className="px-4 py-3 font-bold text-slate-900">{program.nameArabic}</td>
                                  <td className="px-4 py-3 text-center">
                                    <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${DEGREE_COLORS[program.degree] || "bg-slate-100 text-slate-600"}`}>
                                      {DEGREE_LABELS[program.degree] || program.degree}
                                    </span>
                                  </td>
                                  <td className="px-4 py-3 text-center text-slate-500 font-semibold">{program.creditHours || "-"}</td>
                                  <td className="px-4 py-3 text-center font-bold text-emerald-600">{program.jordanianFeePerHour ? `${program.jordanianFeePerHour} JOD` : "-"}</td>
                                  <td className="px-4 py-3 text-center font-bold text-blue-600">{program.internationalFeePerHour ? `${program.internationalFeePerHour} ${program.internationalFeeUnit}` : "-"}</td>
                                  <td className="px-4 py-3 text-center">
                                    <div className="flex justify-center gap-1">
                                      <button onClick={() => setEditingProgram(editingProgram === program.id ? null : program.id)}
                                        className="p-1.5 text-brand-600 hover:bg-brand-50 rounded-lg transition"><Edit2 size={14} /></button>
                                      <button onClick={() => handleDeleteProgram(program.id, faculty.id)}
                                        className="p-1.5 text-red-500 hover:bg-red-50 rounded-lg transition"><Trash2 size={14} /></button>
                                    </div>
                                  </td>
                                </tr>
                                {editingProgram === program.id && (
                                  <tr key={`edit-${program.id}`}>
                                    <td colSpan={6} className="px-4 pb-3">
                                      <ProgramForm initial={program}
                                        onSave={(d) => handleUpdateProgram(program.id, faculty.id, d)}
                                        onCancel={() => setEditingProgram(null)} />
                                    </td>
                                  </tr>
                                )}
                              </>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    ) : (
                      <p className="text-sm text-slate-400 font-semibold text-center py-4">لا يوجد تخصصات. أضف تخصص أدناه.</p>
                    )}

                    {addingProgram === faculty.id ? (
                      <ProgramForm onSave={(d) => handleAddProgram(faculty.id, d)} onCancel={() => setAddingProgram(null)} />
                    ) : (
                      <button onClick={() => setAddingProgram(faculty.id)}
                        className="w-full flex items-center justify-center gap-2 py-2.5 border-2 border-dashed border-brand-200 text-brand-600 font-bold text-sm rounded-xl hover:bg-brand-50 transition mt-2">
                        <Plus size={15} />إضافة تخصص
                      </button>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* === SEMESTER FEES TAB === */}
      {activeTab === "fees" && (
        <div className="space-y-6">
          <div className="flex justify-end">
            <button onClick={() => setShowSemesterFeeForm(true)}
              className="flex items-center gap-2 bg-brand-500 text-slate-900 px-4 py-2.5 rounded-xl font-bold text-sm hover:bg-brand-600 transition">
              <Plus size={16} />إضافة رسم تسجيل
            </button>
          </div>

          {showSemesterFeeForm && (
            <SemesterFeeForm onSave={handleAddSemesterFee} onCancel={() => setShowSemesterFeeForm(false)} />
          )}

          {Object.entries(groupedFees).map(([level, fees]) => (
            <div key={level} className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
              <div className="px-5 py-3 bg-slate-50 border-b border-slate-100">
                <h3 className="font-black text-slate-900">{degreeLevelLabels[level] || level}</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-slate-50/50 border-b border-slate-100">
                    <tr className="text-right">
                      <th className="px-4 py-3 font-bold text-slate-600">البيان</th>
                      <th className="px-4 py-3 font-bold text-slate-600 text-center">أردني (JOD)</th>
                      <th className="px-4 py-3 font-bold text-slate-600 text-center">دولي</th>
                      <th className="px-4 py-3 font-bold text-slate-600 text-center">مستردة</th>
                      <th className="px-4 py-3 font-bold text-slate-600 text-center">إجراء</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                    {fees.map(fee => (
                      <>
                        <tr key={fee.id} className="hover:bg-slate-50/50">
                          <td className="px-4 py-3 font-semibold text-slate-800">{fee.labelArabic}</td>
                          <td className="px-4 py-3 text-center font-bold text-emerald-600">{fee.jordanianAmount ? `${fee.jordanianAmount}` : "-"}</td>
                          <td className="px-4 py-3 text-center font-bold text-blue-600">{fee.internationalAmount ? `${fee.internationalAmount} ${fee.internationalUnit}` : "-"}</td>
                          <td className="px-4 py-3 text-center">{fee.isRefundable ? <span className="text-emerald-600 font-bold text-xs bg-emerald-50 px-2 py-0.5 rounded-full">نعم</span> : <span className="text-slate-400 text-xs">-</span>}</td>
                          <td className="px-4 py-3 text-center">
                            <div className="flex justify-center gap-1">
                              <button onClick={() => setEditingSemesterFee(editingSemesterFee === fee.id ? null : fee.id)}
                                className="p-1.5 text-brand-600 hover:bg-brand-50 rounded-lg transition"><Edit2 size={14} /></button>
                              <button onClick={() => handleDeleteSemesterFee(fee.id)}
                                className="p-1.5 text-red-500 hover:bg-red-50 rounded-lg transition"><Trash2 size={14} /></button>
                            </div>
                          </td>
                        </tr>
                        {editingSemesterFee === fee.id && (
                          <tr key={`edit-fee-${fee.id}`}>
                            <td colSpan={5} className="px-4 pb-3">
                              <SemesterFeeForm initial={fee}
                                onSave={(d) => handleUpdateSemesterFee(fee.id, d)}
                                onCancel={() => setEditingSemesterFee(null)} />
                            </td>
                          </tr>
                        )}
                      </>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}

          {semesterFees.length === 0 && !showSemesterFeeForm && (
            <div className="text-center py-12 text-slate-400 font-semibold">لا توجد رسوم تسجيل مضافة بعد.</div>
          )}
        </div>
      )}
    </div>
  );
}
