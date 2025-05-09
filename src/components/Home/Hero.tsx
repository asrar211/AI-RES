import { MorphingText } from "../ui/Morph";
import { TypingAnimation } from "../ui/Typing";

const texts = [
  "Hello",
  "Welcome",
  "Make",
  "Your",
  "Resume",
  "Better",
  "with",
  "Us",
];

export function MorphingTextDemo() {
  return (
    <>
    <div className="flex flex-col items-center justify-center h-screen">
        <MorphingText texts={texts} />
        <TypingAnimation className="text-sm mt-10 opacity-70">Website Under Development</TypingAnimation>
    </div>
    </>

)  
}
