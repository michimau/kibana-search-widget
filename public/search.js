import 'plugins/search/search_controller';
import visTemplate from 'plugins/search/search.html';

import {CATEGORY} from 'ui/vis/vis_category';
import {VisFactoryProvider} from 'ui/vis/vis_factory';
import {VisTypesRegistryProvider} from 'ui/registry/vis_types';
import {VisSchemasProvider} from 'ui/vis/editors/default/schemas';

VisTypesRegistryProvider.register(searchProvider);

function searchProvider(Private) {
  const VisFactory = Private(VisFactoryProvider);
  const Schemas = Private(VisSchemasProvider);

  return VisFactory.createAngularVisualization({
    name: 'search',
    title: 'Search widget',
    description: 'Search widget for embed mode',
    icon: 'fa-search',
    category: CATEGORY.OTHERS, 
    visConfig: {
    defaults: {},
      template: visTemplate,
    },
    editorConfig: {},
    requestHandler: 'none',
    responseHandler: 'none'
  });
}

export default searchProvider;
