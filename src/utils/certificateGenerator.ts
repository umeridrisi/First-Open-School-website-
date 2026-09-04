import jsPDF from 'jspdf';
import { StudentProfile, ItemProgress } from '../types';
import { AGE_TIER_INFO } from '../data/curriculumData';

/**
 * Generates an official watermarked banded PDF Certificate for First Open School
 */
export function generateCertificatePDF(student: StudentProfile, schoolName: string = 'First Open School'): jsPDF {
  // Create landscape A4 PDF document (297mm x 210mm)
  const doc = new jsPDF({
    orientation: 'landscape',
    unit: 'mm',
    format: 'a4'
  });

  const width = doc.internal.pageSize.getWidth(); // 297
  const height = doc.internal.pageSize.getHeight(); // 210

  // 1. Decorative Banded Background & Outer Frame
  // Outer Border
  doc.setLineWidth(1.5);
  doc.setDrawColor(20, 83, 161); // Royal Blue #1453a1
  doc.rect(8, 8, width - 16, height - 16);

  doc.setLineWidth(0.5);
  doc.setDrawColor(234, 179, 8); // Gold #eab308
  doc.rect(11, 11, width - 22, height - 22);

  // Top Band Ribbon
  doc.setFillColor(20, 83, 161); // Royal Blue
  doc.rect(12, 12, width - 24, 14, 'F');
  doc.setFillColor(234, 179, 8); // Gold accent
  doc.rect(12, 26, width - 24, 3, 'F');

  // Bottom Band Ribbon
  doc.setFillColor(20, 83, 161);
  doc.rect(12, height - 26, width - 24, 14, 'F');
  doc.setFillColor(234, 179, 8);
  doc.rect(12, height - 29, width - 24, 3, 'F');

  // Top Band Text
  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.text(schoolName.toUpperCase() + ' • OFFICIAL ACADEMIC LEARNING REPORT', width / 2, 21, { align: 'center' });

  // Bottom Band Text
  doc.text('AD-FREE • SECURE • EVIDENCE-BASED PEDAGOGICAL FRAMEWORK', width / 2, height - 17, { align: 'center' });

  // 2. Diagonally Rotated Watermark Text
  doc.setTextColor(220, 225, 235);
  doc.setFontSize(36);
  doc.setFont('helvetica', 'bold');
  
  // Draw light watermark in center
  doc.text('FIRST OPEN SCHOOL • VERIFIED PROGRESS', width / 2, height / 2 + 10, {
    align: 'center',
    angle: 20
  });

  // 3. Main Header & Title
  doc.setTextColor(30, 41, 59); // Slate-800
  doc.setFontSize(26);
  doc.setFont('times', 'bold');
  doc.text('CERTIFICATE OF LEARNING ACHIEVEMENT', width / 2, 48, { align: 'center' });

  doc.setTextColor(100, 116, 139); // Slate-500
  doc.setFont('helvetica', 'italic');
  doc.setFontSize(13);
  doc.text('This milestone progress report is proudly presented to', width / 2, 58, { align: 'center' });

  // 4. Student Name
  doc.setTextColor(15, 23, 42); // Very dark slate
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(28);
  doc.text(student.name || 'Star Learner', width / 2, 72, { align: 'center' });

  // Underline for name
  const nameWidth = doc.getTextWidth(student.name || 'Star Learner');
  doc.setDrawColor(234, 179, 8);
  doc.setLineWidth(1);
  doc.line(width / 2 - nameWidth / 2 - 10, 75, width / 2 + nameWidth / 2 + 10, 75);

  // 5. Tier & Achievement Description
  const tierInfo = AGE_TIER_INFO[student.ageTier];
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(12);
  doc.setTextColor(51, 65, 85);
  doc.text(
    `For exceptional dedication, curiosity, and interactive milestone mastery in the ${tierInfo.gradeLabel} curriculum tier.`,
    width / 2,
    85,
    { align: 'center', maxWidth: 220 }
  );

  // 6. Analytics Milestone Box
  doc.setFillColor(248, 250, 252); // Slate-50
  doc.setDrawColor(203, 213, 225); // Slate-300
  doc.roundedRect(30, 95, width - 60, 48, 4, 4, 'FD');

  // Compute metrics
  const totalLetters = 26;
  const totalDigits = 21;
  const progressVals = (Object.values(student.progress || {}) as ItemProgress[]);
  
  const masteredLetters = progressVals.filter(p => p.type === 'letter' && p.mastered).length;
  const masteredDigits = progressVals.filter(p => p.type === 'digit' && p.mastered).length;
  
  const letterPct = Math.round((masteredLetters / totalLetters) * 100);
  const digitPct = Math.round((masteredDigits / totalDigits) * 100);

  const tracingAccuracies = progressVals.filter(p => p.tracingAccuracy !== undefined).map(p => p.tracingAccuracy || 0);
  const avgTracing = tracingAccuracies.length ? Math.round(tracingAccuracies.reduce((a, b) => a + b, 0) / tracingAccuracies.length) : 90;

  // Render Metric Columns
  doc.setFontSize(11);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(30, 58, 138); // Blue 900

  // Column 1: Alphabet Phonics
  doc.text('🔤 Alphabets & Phonics', 45, 106);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.setTextColor(71, 85, 105);
  doc.text(`Mastered: ${masteredLetters} / ${totalLetters} (${letterPct}%)`, 45, 114);

  // Progress Bar 1
  doc.setFillColor(226, 232, 240);
  doc.rect(45, 118, 55, 4, 'F');
  doc.setFillColor(59, 130, 246); // Blue
  doc.rect(45, 118, Math.max(2, (letterPct / 100) * 55), 4, 'F');

  // Column 2: Digits & Numeracy
  doc.setFontSize(11);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(30, 58, 138);
  doc.text('🔢 Digits & Counting', 120, 106);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.setTextColor(71, 85, 105);
  doc.text(`Mastered: ${masteredDigits} / ${totalDigits} (${digitPct}%)`, 120, 114);

  // Progress Bar 2
  doc.setFillColor(226, 232, 240);
  doc.rect(120, 118, 55, 4, 'F');
  doc.setFillColor(16, 185, 129); // Emerald
  doc.rect(120, 118, Math.max(2, (digitPct / 100) * 55), 4, 'F');

  // Column 3: Fine Motor Tracing & Badges
  doc.setFontSize(11);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(30, 58, 138);
  doc.text('⭐ Tracing & Streaks', 195, 106);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.setTextColor(71, 85, 105);
  doc.text(`Tracing Accuracy: ${avgTracing}%`, 195, 114);
  doc.text(`Stars Earned: ${student.stars || 0} ⭐  |  Streak: ${student.streakDays || 1}d 🔥`, 195, 122);

  // Pedagogical Note
  doc.setFontSize(9);
  doc.setFont('helvetica', 'italic');
  doc.setTextColor(100, 116, 139);
  doc.text('Verified through continuous multi-sensory gamified quizzes, phonemic recall, and subitizing drills.', width / 2, 136, { align: 'center' });

  // 7. Footer Seal & Signature Lines
  const today = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  // Left: Date
  doc.setFontSize(10);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(51, 65, 85);
  doc.text(`Issued On: ${today}`, 45, 158);
  doc.setFont('helvetica', 'normal');
  doc.text(`Class Code: ${student.classCode || 'CLASS-101'}`, 45, 164);

  // Center: Gold Emblem / Seal Box
  doc.setFillColor(254, 240, 138); // Yellow-200
  doc.setDrawColor(234, 179, 8);
  doc.setLineWidth(1);
  doc.circle(width / 2, 160, 14, 'FD');

  doc.setFontSize(16);
  doc.text('🎓', width / 2, 163, { align: 'center' });

  // Right: Educator Signature
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.line(200, 158, 260, 158); // Line
  doc.text('Authorized Educator / Parent', 230, 164, { align: 'center' });

  return doc;
}

/**
 * Trigger browser download of PDF Certificate
 */
export function downloadCertificatePDF(student: StudentProfile, schoolName: string = 'First Open School') {
  const doc = generateCertificatePDF(student, schoolName);
  const filename = `${student.name.replace(/\s+/g, '_')}_First_Open_School_Certificate.pdf`;
  doc.save(filename);
}
