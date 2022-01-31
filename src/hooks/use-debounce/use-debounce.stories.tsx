import React, { useEffect, useState } from 'react';
import { ComponentMeta } from '@storybook/react';
import { useDebounce } from './use-debounce';
import { TextField } from '../../components/forms/text-field/text-field';
import { Typography } from '../../components/typography/typography';

type Result = {
  id: number;
  text: string;
};

const dummyResults = [
  {
    id: 1,
    text: 'result 1',
  },
  {
    id: 2,
    text: 'result 2',
  },
  {
    id: 3,
    text: 'result 3',
  },
];

const Block: React.VoidFunctionComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [comics, setComicsResults] = useState<Result[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      setIsSearching(true);
      setIsSearching(false);
      setComicsResults(dummyResults);
    } else {
      setComicsResults([]);
    }
  }, [debouncedSearchTerm]);

  return (
    <div>
      <TextField
        placeholder="Search Fake DB"
        onChange={(e) => setSearchTerm(e.target.value)}
        validationFunction={() => true}
        id="search"
        name="search"
        // label="search"
        // type="search"
      />
      {isSearching && <Typography preset="custom">Searching ...</Typography>}
      {comics.map((result) => (
        <div key={result.id}>
          <Typography preset="custom">{result.text}</Typography>
        </div>
      ))}
    </div>
  );
};

export default {
  title: `Components/Hooks/UseDebounce`,
  component: Block,
} as ComponentMeta<typeof Block>;

export const Basic = {
  args: {},
  parameters: {
    design: { type: 'figma', url: '' },
    status: { type: 'wip' },
  },
};
