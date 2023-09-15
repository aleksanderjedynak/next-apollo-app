import { Inter } from "next/font/google";
import SampleComponent from "@/components/SampleComponent";
import TestTailwinduiComponents from "@/components/TestTailwinduiComponents";
import TestMUIComponents from "@/components/TestMUIComponents";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <div> test tailwindui</div>
      <TestTailwinduiComponents />
      <div> test apollo ckient react</div>
      <SampleComponent />

      <div> test mui</div>
      <TestMUIComponents />
    </div>
  );
}
