const Colors = () => {
  const colors = [
    {
      name: 'bg-secondary-hover text-black-default',
      text: 'Secondary::Hover',
    },
    {
      name: 'bg-secondary-active text-white-default',
      text: 'Secondary::Active',
    },
    {
      name: 'bg-primary-disabled text-white-default',
      text: 'Primary::Disabled',
    },
    {
      name: 'bg-primary-default text-white-default',
      text: 'Primary::Default',
    },
    {
      name: 'bg-primary-hover text-white-default',
      text: 'Primary::Hover',
    },
    {
      name: 'bg-primary-active text-white-default',
      text: 'Primary::Active',
    },
    {
      name: 'bg-white-transparent text-black-default',
      text: 'White::Transparent',
    },
    {
      name: 'bg-white-default text-black-default',
      text: 'White::Default',
    },
    {
      name: 'bg-gray-lightest text-black-default',
      text: 'Gray::Lightest',
    },
    {
      name: 'bg-gray-lighter text-black-default',
      text: 'Gray::Lighter',
    },
    {
      name: 'bg-gray-light text-black-default',
      text: 'Gray::Light',
    },
    {
      name: 'bg-gray-default text-black-default',
      text: 'Gray::Default',
    },
    {
      name: 'bg-gray-dark text-white-default',
      text: 'Gray::Dark',
    },
    {
      name: 'bg-black-default text-white-default',
      text: 'Black::Default',
    },
    {
      name: 'bg-red-lighter text-red-default',
      text: 'Red::Lighter',
    },
    {
      name: 'bg-red-light text-red-default',
      text: 'Red::Light',
    },
    {
      name: 'bg-red-default text-white-default',
      text: 'Red::Default',
    },
    {
      name: 'bg-red-super text-white-default',
      text: 'Red::Super',
    },
    {
      name: 'bg-green-default text-white-default',
      text: 'Green::Default',
    },
  ];

  return (
    <div>
      <h2 className="text-gray-500 text-xs font-medium uppercase tracking-wide">
        Colors:
      </h2>

      <ul className="grid grid-cols-1 gap-1">
        {colors.map((c) => (
          <li key={c.text} className={`shadow-sm p-5 ${c.name}`}>
            <p className={`${c.name} font-bold`}>{c.text} </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { Colors };
