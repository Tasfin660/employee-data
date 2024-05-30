import AddEmployee from '../employee/AddEmployee';
import Heading from '../specific/Heading';

export default function Header() {
  return (
    <header className="bg-emerald-50">
      <div className="container mx-auto grid grid-cols-2 items-center justify-center gap-16 py-16">
        <AddEmployee />
        <Heading />
      </div>
    </header>
  );
}
