import { inject } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs';
import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const accountService = inject(AccountService);
  const toastr = inject(ToastrService);

  // const isLogedin = true;

  // if (isLogedin) {
  //   toastr.success('you loggin!');
  //   return true;
  // } else {
  //   toastr.error('you shall not pass!');
  //   return false;
  // }

  return accountService.currentUser$.pipe(
    map(user => {
      if (user) return true;
      toastr.error('You shall not pass!');
      return false;
    })
  );
};
