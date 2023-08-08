export default function MainNav() {
  return (
    <nav>
      <ul className="flex space-x-4 text-sm font-medium">
        {["Home", "About"].map((text) => (
          <li className="cursor-pointer" key={text}>
            {text}
          </li>
        ))}
      </ul>
    </nav>
  );
}
