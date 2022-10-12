/* eslint-disable max-len */
// eslint-disable-next-line import/no-default-export
export default (plop) => {
  plop.setGenerator('component', {
    description: 'Create a Component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Name:',
      },
      {
        type: 'list',
        name: 'folder',
        message: 'What is the component type?',
        default: 'ui',
        choices: [
          {
            value: 'shared/ui',
            name: 'Shared UI component',
          },
          {
            value: 'pages',
            name: 'Page lazy component',
          },
          {
            value: 'widgets',
            name: 'Widget component',
          },
          {
            value: 'entities',
            name: 'Entity',
          },
        ],
      },
    ],
    actions: ({ folder }) => {
      switch (folder) {
        case 'pages': {
          const templateFolder = 'lazy';
          return [
            {
              type: 'add',
              path: 'src/{{folder}}/{{pascalCase name}}/ui/{{pascalCase name}}.module.scss',
              templateFile: `config/plop/templates/default/Component.module.scss.hbs`,
            },
            {
              type: 'add',
              path: 'src/{{folder}}/{{pascalCase name}}/ui/{{pascalCase name}}.tsx',
              templateFile: `config/plop/templates/${templateFolder}/Component.tsx.hbs`,
            },
            {
              type: 'add',
              path: 'src/{{folder}}/{{pascalCase name}}/ui/{{pascalCase name}}.stories.tsx',
              templateFile: `config/plop/templates/${templateFolder}/Component.stories.tsx.hbs`,
            },
            {
              type: 'add',
              path: 'src/{{folder}}/{{pascalCase name}}/ui/{{pascalCase name}}.test.tsx',
              templateFile: `config/plop/templates/${templateFolder}/Component.test.tsx.hbs`,
            },
            {
              type: 'add',
              path: 'src/{{folder}}/{{pascalCase name}}/index.ts',
              templateFile: `config/plop/templates/${templateFolder}/index.ts.hbs`,
            },
            {
              type: 'add',
              path: 'src/{{folder}}/{{pascalCase name}}/ui/{{pascalCase name}}.async.tsx',
              templateFile: `config/plop/templates/${templateFolder}/Component.async.tsx.hbs`,
            },
          ];
        }

        case 'entities': {
          const templateFolder = 'entity';
          return [
            {
              type: 'add',
              path: 'src/{{folder}}/{{pascalCase name}}/index.ts',
              templateFile: `config/plop/templates/${templateFolder}/index.ts.hbs`,
            },
            // ui
            {
              type: 'add',
              path: 'src/{{folder}}/{{pascalCase name}}/ui/{{pascalCase name}}.tsx',
              templateFile: `config/plop/templates/${templateFolder}/ui/Component.tsx.hbs`,
            },
            {
              type: 'add',
              path: 'src/{{folder}}/{{pascalCase name}}/ui/{{pascalCase name}}.test.tsx',
              templateFile: `config/plop/templates/${templateFolder}/ui/Component.test.tsx.hbs`,
            },
            // model
            // selectors
            {
              type: 'add',
              path: 'src/{{folder}}/{{pascalCase name}}/model/selectors/get{{pascalCase name}}/get{{pascalCase name}}.ts',
              templateFile: `config/plop/templates/${templateFolder}/model/selectors/getComponent/getComponent.ts.hbs`,
            },
            {
              type: 'add',
              path: 'src/{{folder}}/{{pascalCase name}}/model/selectors/get{{pascalCase name}}/get{{pascalCase name}}.test.ts',
              templateFile: `config/plop/templates/${templateFolder}/model/selectors/getComponent/getComponent.test.ts.hbs`,
            },
            {
              type: 'add',
              path: 'src/{{folder}}/{{pascalCase name}}/model/selectors/index.ts',
              templateFile: `config/plop/templates/${templateFolder}/model/selectors/index.ts.hbs`,
            },
            // slice
            {
              type: 'add',
              path: 'src/{{folder}}/{{pascalCase name}}/model/slice/{{camelCase name}}Slice.ts',
              templateFile: `config/plop/templates/${templateFolder}/model/slice/componentSlice.ts.hbs`,
            },
            {
              type: 'add',
              path: 'src/{{folder}}/{{pascalCase name}}/model/slice/{{camelCase name}}Slice.test.ts',
              templateFile: `config/plop/templates/${templateFolder}/model/slice/componentSlice.test.ts.hbs`,
            },
            //types
            {
              type: 'add',
              path: 'src/{{folder}}/{{pascalCase name}}/model/types/{{camelCase name}}Schema.ts',
              templateFile: `config/plop/templates/${templateFolder}/model/types/componentSchema.ts.hbs`,
            },
          ];
        }

        default: {
          const templateFolder = 'default';
          return [
            {
              type: 'add',
              path: 'src/{{folder}}/{{pascalCase name}}/ui/{{pascalCase name}}.module.scss',
              templateFile: `config/plop/templates/default/Component.module.scss.hbs`,
            },
            {
              type: 'add',
              path: 'src/{{folder}}/{{pascalCase name}}/ui/{{pascalCase name}}.tsx',
              templateFile: `config/plop/templates/${templateFolder}/Component.tsx.hbs`,
            },
            {
              type: 'add',
              path: 'src/{{folder}}/{{pascalCase name}}/ui/{{pascalCase name}}.stories.tsx',
              templateFile: `config/plop/templates/${templateFolder}/Component.stories.tsx.hbs`,
            },
            {
              type: 'add',
              path: 'src/{{folder}}/{{pascalCase name}}/ui/{{pascalCase name}}.test.tsx',
              templateFile: `config/plop/templates/${templateFolder}/Component.test.tsx.hbs`,
            },
            {
              type: 'add',
              path: 'src/{{folder}}/{{pascalCase name}}/index.ts',
              templateFile: `config/plop/templates/${templateFolder}/index.ts.hbs`,
            },
          ];
        }
      }
    },
  });
};
