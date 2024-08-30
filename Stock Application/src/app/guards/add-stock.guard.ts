import { CanActivateFn, Router } from '@angular/router';

export const addStockGuard: CanActivateFn = (route, state) => {
  const ls = localStorage;
  
  if(ls.getItem('status') !=null && ls.getItem('status') == 'loggedin')
    return true;
  else{
      
    return false;
  }
};
