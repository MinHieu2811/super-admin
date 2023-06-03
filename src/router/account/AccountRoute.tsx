import React from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';

import { ErrorPage } from '@/src/router/dashboard/ErrorPage';
import { PageProfile } from '@/src/router/account/ProfilePage';

import {
  AuthenticatedRouteGuard,
  // PublicOnlyRouteGuard,
} from '@/src/router/guard';
import { PagePassword } from './PagePassword';

const AccountRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <AuthenticatedRouteGuard>
            <Navigate to="profile" replace />
          </AuthenticatedRouteGuard>
        }
      />
      {/* 
      <Route
        path="register"
        element={
          <PublicOnlyRouteGuard>
            <PageRegister />
          </PublicOnlyRouteGuard>
        }
      />
      <Route
        path="activate"
        element={
          <PublicOnlyRouteGuard>
            <PageActivate />
          </PublicOnlyRouteGuard>
        }
      />
      <Route
        path="reset"
        element={
          <PublicOnlyRouteGuard>
            <PageResetPasswordRequest />
          </PublicOnlyRouteGuard>
        }
      />
      <Route
        path="reset/finish"
        element={
          <PublicOnlyRouteGuard>
            <PageResetPasswordConfirm />
          </PublicOnlyRouteGuard>
        }
      /> */}

      <Route
        path="profile"
        element={
          <AuthenticatedRouteGuard>
            <PageProfile />
          </AuthenticatedRouteGuard>
        }
      />
      <Route
        path="password"
        element={
          <AuthenticatedRouteGuard>
            <PagePassword />
          </AuthenticatedRouteGuard>
        }
      />

      <Route path="*" element={<ErrorPage errorCode={404} />} />
    </Routes>
  );
};

export default AccountRoutes;
