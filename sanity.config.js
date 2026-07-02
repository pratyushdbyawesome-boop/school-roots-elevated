import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';

export default defineConfig({
  name: 'default',
  title: 'School Roots Admin',
  projectId: 'Dak1oghg',
  dataset: 'production',
  basePath: '/studio', // This makes it accessible at yoursite.com/studio
  plugins: [structureTool()],
  schema: {
    types: [], // We can add schemas here later!
  },
});
