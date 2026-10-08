import { StudentProfile, ItemProgress, AgeTier } from '../types';
import { AGE_TIER_INFO } from '../data/curriculumData';

export interface PedagogicalInsightResult {
  summary: string;
  pedagogicalInsight: string;
  recommendedActivities: string[];
  encouragingNote: string;
}

/**
 * Computes evidence-based developmental pedagogical insights 100% locally
 * in the user's browser based on actual student learning data.
 */
export function generateLocalPedagogicalInsights(student: StudentProfile): PedagogicalInsightResult {
  const progressVals = (Object.values(student.progress || {}) as ItemProgress[]);
  const masteredLetters = progressVals.filter(p => p.type === 'letter' && p.mastered).length;
  const masteredDigits = progressVals.filter(p => p.type === 'digit' && p.mastered).length;

  const letterPct = Math.round((masteredLetters / 26) * 100);
  const digitPct = Math.round((masteredDigits / 21) * 100);
  const tierInfo = AGE_TIER_INFO[student.ageTier] || AGE_TIER_INFO['kindergarten'];

  // Determine targeted areas
  const allLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const unmasteredLetters = allLetters.filter(char => {
    const p = student.progress?.[char];
    return !p || !p.mastered;
  });

  const unmasteredDigits = Array.from({ length: 21 }, (_, i) => String(i)).filter(digit => {
    const p = student.progress?.[digit];
    return !p || !p.mastered;
  });

  // 1. Summary
  let summary = '';
  if (letterPct >= 80 && digitPct >= 80) {
    summary = `${student.name} demonstrates exceptional mastery in early reading and numeracy within the ${tierInfo.gradeLabel} curriculum. Foundational phonics recognition and number quantity matching are thoroughly internalized.`;
  } else if (letterPct >= 50 || digitPct >= 50) {
    summary = `${student.name} is making steady, meaningful progress in the ${tierInfo.gradeLabel} tier, with ${letterPct}% alphabet mastery and ${digitPct}% digit fluency. Consistent daily engagement is visibly building confidence.`;
  } else {
    summary = `${student.name} is actively establishing early foundations in the ${tierInfo.gradeLabel} level. Regular exploration of letter sounds, stroke tracing, and number counting is building early cognitive connections.`;
  }

  // 2. Pedagogical Insight
  let pedagogicalInsight = '';
  if (student.ageTier === 'pre-k') {
    pedagogicalInsight = 'In Pre-K learners, tactile tracing and repetitive auditory phonics activate multi-sensory neural pathways. Emphasizing gross-motor stroke mimicry and letter-object association reinforces letter-name familiarity before formal reading instruction.';
  } else if (student.ageTier === 'kindergarten') {
    pedagogicalInsight = 'At the Kindergarten stage, developing phonemic segmentation (hearing individual phonemes) and subitizing (recognizing small sets without counting one-by-one) forms the bedrock for decoding and mental arithmetic.';
  } else if (student.ageTier === 'grade-1-2') {
    pedagogicalInsight = 'For Grades 1-2, transitioning from isolated phonics to expressive poem recitation enhances oral reading fluency and vocabulary comprehension. In numeracy, connecting numeral symbols to concrete quantities reinforces place-value intuition.';
  } else {
    pedagogicalInsight = 'For foundational learning, systematic repetition paired with auditory feedback solidifies automaticity. Developing fluency in foundational graphemes and numbers 0-20 frees working memory for advanced reading comprehension and problem solving.';
  }

  // 3. Recommended Activities
  const recommendedActivities: string[] = [];

  // Reading / Phonics activity
  if (unmasteredLetters.length > 0) {
    const focusLetters = unmasteredLetters.slice(0, 3).join(', ');
    recommendedActivities.push(`Practice 5 minutes of focused tactile tracing for letters ${focusLetters} with audio voice guidance.`);
  } else {
    recommendedActivities.push('Recite simple English poems together to explore rhyme, rhythm, and expressive vocal pitch.');
  }

  // Math / Numeracy activity
  if (unmasteredDigits.length > 0) {
    const focusDigits = unmasteredDigits.slice(0, 3).join(', ');
    recommendedActivities.push(`Play interactive counting games with quantities for numbers ${focusDigits} to strengthen visual subitizing.`);
  } else {
    recommendedActivities.push('Engage in everyday counting exercises around the house (e.g. counting steps, spoons, or fruit) to reinforce number bonds.');
  }

  // Multi-sensory / Creative activity
  if (student.streakDays >= 3) {
    recommendedActivities.push(`Celebrate ${student.name}'s ${student.streakDays}-day learning streak with a personalized printable achievement certificate!`);
  } else {
    recommendedActivities.push('Explore the Kids Encyclopedia together to spark natural curiosity about nature, animals, and science analogies.');
  }

  // 4. Encouraging Note
  let encouragingNote = '';
  if (student.stars > 20) {
    encouragingNote = `Outstanding work, ${student.name}! With ${student.stars} stars earned, you are shining bright as a curious scholar! Keep up the fantastic effort!`;
  } else {
    encouragingNote = `Super start, ${student.name}! Every letter traced and every number counted builds your brain power. Keep having fun learning!`;
  }

  return {
    summary,
    pedagogicalInsight,
    recommendedActivities,
    encouragingNote,
  };
}
