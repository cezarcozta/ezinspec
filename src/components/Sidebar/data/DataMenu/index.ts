type IMenuData = {
   path?: string;
   icon: string;
   label: string;
   click?: () => void;
}

export const dataMenu: IMenuData[] = [
   {
      path: '/dashboard',
      icon: 'string',
      label: 'Dashboard',
      
   },
   {
      path: '/',
      icon: 'string',
      label: 'Monitoramento',
      
   },
   {
      path: '/reports',
      icon: 'string',
      label: 'Relatórios',
      
   },
   {
      path: '/machines',
      icon: 'string',
      label: 'Máquinas',
      
   },
   {
      path: '/metrics',
      icon: 'string',
      label: 'Métricas',
      
   },
   {
      
      icon: 'string',
      label: 'Sair',
      click: () => {console.log('sair')},
   }
];