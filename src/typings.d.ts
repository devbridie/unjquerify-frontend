/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

declare module '*!txt' {
  const content: string;
  export default content;
}

// declare var require: any;
