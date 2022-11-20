import { useRouter } from "next/router";
import { motion } from "framer-motion";
import ReactConfetti from "react-confetti";

export default function Success() {
  const routers = useRouter();
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="h-screen grid items-center justify-center mx-auto"
    >
      <div className="bg-white grid rounded-lg w-auto text-gray-700 p-16">
        <h1 className="text-3xl font-sans">
          Thanks for the Email {routers.query.name}
        </h1>
        <p className="text-lg text-gray-500">
          We have sent you an email over at {routers.query.email}. We will get
          back to you as soon as we can
        </p>
      </div>
      <ReactConfetti />
    </motion.main>
  );
}
