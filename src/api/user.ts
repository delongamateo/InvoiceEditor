import { useQueryClient, useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import Cookies from "js-cookie";

const env = "development";
const values = Cookies.get();
// Replace these URLs with your actual API endpoints
const API_URL =
  env === "development"
    ? "http://localhost:3000/api/v1"
    : "https://your-api-url.com";
const LOGIN_ENDPOINT = `${API_URL}/intuit_accounts/grant_url`;
const LOGOUT_ENDPOINT = `${API_URL}/logout`;
const GET_USER_ENDPOINT = `${API_URL}/user`;
const AUTH_TOKEN_ENDPOINT = `${API_URL}/intuit_accounts/auth_token`;
const GET_INVOICES = `${API_URL}/invoices`;

// Function to log in a user
export async function login() {
  const response = await axios.get(LOGIN_ENDPOINT);
  return response.data;
}

export async function getInvoices() {
  try {
    const response = await axios.get(GET_INVOICES, {
      headers: {
        Authorization: `Bearer ${Cookies.get('access_token')}`, // Use current access token from cookies
      },
    });

    // Check if the response contains a new access token
    const newAccessToken = response.headers.authorization;

    // Only update the cookie if a new token is provided (e.g., after expiration)
    if (newAccessToken && newAccessToken.startsWith('Bearer ')) {
      // Remove the 'Bearer ' prefix from the token
      const token = newAccessToken.replace('Bearer ', '');

      // Set the new access token in the cookies (with expiration and path as needed)
      Cookies.set('access_token', token); // Adjust expiry as needed
    }

    return response.data;
  } catch (error) {
    console.error('Error fetching invoices:', error);

    // Handle token expiration or other errors here if needed
    // if (error.response && error.response.status === 401) {
    //   // Token might be invalid or expired, redirect to login or handle refresh token flow
    // }

    throw error; // Re-throw error after logging
  }
}

// Function to log out a user
export async function logout() {
  const response = await axios.post(LOGOUT_ENDPOINT);
  return response.data;
}

// Function to get the current user
export async function getUser() {
  const response = await axios.get(GET_USER_ENDPOINT);
  return response.data;
}

export async function sendAuthToken(token: string) {
  const response = await axios.get(AUTH_TOKEN_ENDPOINT + "?code=" + token);
  return response.data;
}

export function useLogoutMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: logout,
    onSettled: () => queryClient.invalidateQueries({ queryKey: ["user"] }),
  });
}

export function useUserQuery() {
  return useQuery({
    queryKey: ["user"],
    queryFn: getUser,
  });
}

export function useLoginQuery() {
  return useQuery({
    queryKey: ["grant_url"],
    queryFn: login,
    enabled: false,
  });
}

export function useAuthTokenQuery(token: string) {
  return useQuery({
    queryKey: ["auth_token"],
    queryFn: () => sendAuthToken(token),
    enabled: false,
  });
}

export function useGetInvoicesQuery() {
  return useQuery({
    queryKey: ["invoices"],
    queryFn: () => getInvoices(),
    enabled: false,
  });
}