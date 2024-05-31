import { useQueryClient, useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";

const env = "development";

// Replace these URLs with your actual API endpoints
const API_URL =
  env === "development"
    ? "http://localhost:5000/api/v1"
    : "https://your-api-url.com";
const LOGIN_ENDPOINT = `${API_URL}/intuit_accounts/grant_url`;
const LOGOUT_ENDPOINT = `${API_URL}/logout`;
const GET_USER_ENDPOINT = `${API_URL}/user`;
const AUTH_TOKEN_ENDPOINT = `${API_URL}/intuit_accounts/auth_token`;

// Function to log in a user
export async function login() {
  const response = await axios.get(LOGIN_ENDPOINT);
  return response.data;
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