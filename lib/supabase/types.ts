export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          created_at: string
          updated_at: string
          full_name: string | null
          avatar_url: string | null
          email: string
        }
        Insert: {
          id: string
          created_at?: string
          updated_at?: string
          full_name?: string | null
          avatar_url?: string | null
          email: string
        }
        Update: {
          id?: string
          created_at?: string
          updated_at?: string
          full_name?: string | null
          avatar_url?: string | null
          email?: string
        }
      }
      user_preferences: {
        Row: {
          id: string
          user_id: string
          created_at: string
          updated_at: string
          theme: string
          notifications_enabled: boolean
        }
        Insert: {
          id?: string
          user_id: string
          created_at?: string
          updated_at?: string
          theme?: string
          notifications_enabled?: boolean
        }
        Update: {
          id?: string
          user_id?: string
          created_at?: string
          updated_at?: string
          theme?: string
          notifications_enabled?: boolean
        }
      }
      resorts: {
        Row: {
          id: string
          created_at: string
          updated_at: string
          name: string
          description: string
          location: string
          elevation: number
          difficulty_level: string
          image_url: string
          is_active: boolean
        }
        Insert: {
          id?: string
          created_at?: string
          updated_at?: string
          name: string
          description: string
          location: string
          elevation: number
          difficulty_level: string
          image_url: string
          is_active?: boolean
        }
        Update: {
          id?: string
          created_at?: string
          updated_at?: string
          name?: string
          description?: string
          location?: string
          elevation?: number
          difficulty_level?: string
          image_url?: string
          is_active?: boolean
        }
      }
    }
  }
}