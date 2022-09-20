export interface IRoute {
  id: string
  title: string
  url: string
  isExternal?: boolean
  active?: boolean
}

export interface IRouteGroup {
  title: string
  routes: IRoute[]
}
