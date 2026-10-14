const fs = require("fs");
const db = JSON.parse(fs.readFileSync("master_curriculum.json", "utf8"));
console.log("=== CURRICULUM AUDIT ===");
let totalUnits = 0, totalSubtopics = 0, totalQs = 0;

[7, 8].forEach(grade => {
  console.log(`\n================ GRADE ${grade} ================`);
  const subjects = db[grade];
  Object.keys(subjects).forEach(sKey => {
    const s = subjects[sKey];
    let subCount = 0;
    let qCount = 0;
    let totalNotesLen = 0;
    const unitSummaries = [];

    (s.units || []).forEach(u => {
      const uSubs = u.subtopics || [];
      subCount += uSubs.length;
      let uNotesLen = 0;
      let uQs = 0;
      uSubs.forEach(st => {
        const qLen = (st.amtQuiz || st.questions || []).length;
        const nLen = (st.coreNotes || "").length;
        qCount += qLen;
        uQs += qLen;
        totalNotesLen += nLen;
        uNotesLen += nLen;
      });
      const avgUNotes = uSubs.length > 0 ? Math.round(uNotesLen / uSubs.length) : 0;
      unitSummaries.push(`    Unit ${u.number || u.unitNumber}: ${u.title} (${uSubs.length} subtopics, ${uQs} Qs, avg ${avgUNotes} chars notes)`);
    });

    totalUnits += (s.units || []).length;
    totalSubtopics += subCount;
    totalQs += qCount;
    const avgNotesLen = subCount > 0 ? Math.round(totalNotesLen / subCount) : 0;
    console.log(`\n• [${sKey}] ${s.name} (Code: ${s.code}): ${(s.units || []).length} Units, ${subCount} Subtopics, ${qCount} Questions, Avg Notes: ${avgNotesLen} chars`);
    unitSummaries.forEach(us => console.log(us));
  });
});

console.log(`\n================ OVERALL SUMMARY ================`);
console.log(`Total Units: ${totalUnits}`);
console.log(`Total Subtopics: ${totalSubtopics}`);
console.log(`Total AMT Questions: ${totalQs}`);
