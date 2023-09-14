import type { Documents } from '@src/store/components/DocsContents/state';
import { Center } from '@ssamssam/react-ui';

const documents: Array<Documents> = [
  {
    title: 'Center',
    description: '',
    view: <Center>This is Center</Center>,
    componentString: [`<Center>This is Center</Center>`],
  },
];

export { documents };
