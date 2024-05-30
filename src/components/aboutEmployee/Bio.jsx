// REACT ICON
import { FaQuoteLeft } from 'react-icons/fa';

export default function Bio() {
  return (
    <div className="relative col-start-2 col-end-4">
      <p
        className="rounded-r-xl border-l-4 border-emerald-500 p-4
        text-sm text-slate-800 shadow-md"
      >
        As a dedicated IT professional, I excel in problem-solving and driving
        efficiency in our projects. I stay current with industry trends to
        provide innovative solutions, and my strong communication and teamwork
        skills ensure successful project outcomes.
      </p>
      <FaQuoteLeft className="absolute left-3 top-2 -z-10 text-3xl text-gray-600 opacity-20" />
    </div>
  );
}
