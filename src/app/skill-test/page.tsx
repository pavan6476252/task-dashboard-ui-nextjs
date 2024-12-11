import QuestionAnalysis from "@/components/QuestionAnalysis";
import SkillTest from "@/components/SkillTest";
import SyllabusWiseAnalysis from "@/components/SyllabusWiseAnalysis";

export default function SkillTestPage() {
  return <div className="grid grid-cols-12 h-full  overflow-y-scroll">
  <div className="col-span-8 mx-10 h-full">
    <SkillTest />
    <br />
    <br />
    <br />
    <br /> 
  </div>
  <div className="col-span-4 space-y-4">
    <SyllabusWiseAnalysis />
    <QuestionAnalysis />
  </div>
</div>
  }
  