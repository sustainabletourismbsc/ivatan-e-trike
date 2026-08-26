export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.17"
  }
  "e-trike": {
    Tables: {
      enroute: {
        Row: {
          created_at: string
          id: string
        }
        Insert: {
          created_at?: string
          id?: string
        }
        Update: {
          created_at?: string
          id?: string
        }
        Relationships: []
      }
      rides: {
        Row: {
          created_at: string
          id: string
          operator: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          operator?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          operator?: string | null
        }
        Relationships: []
      }
      transactions: {
        Row: {
          created_at: string
          id: string
        }
        Insert: {
          created_at?: string
          id?: string
        }
        Update: {
          created_at?: string
          id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  public: {
    Tables: {
      attractions: {
        Row: {
          address: Json | null
          created_at: string
          description: Json | null
          embedding: string | null
          gallery: Json[] | null
          id: string
          latlang: Json | null
          location: unknown
          name: string
          photosphere: Json[] | null
          rates: Json[] | null
          rating: number | null
          schedules: Json | null
          tags: string[] | null
          type: string | null
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          address?: Json | null
          created_at?: string
          description?: Json | null
          embedding?: string | null
          gallery?: Json[] | null
          id?: string
          latlang?: Json | null
          location?: unknown
          name: string
          photosphere?: Json[] | null
          rates?: Json[] | null
          rating?: number | null
          schedules?: Json | null
          tags?: string[] | null
          type?: string | null
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          address?: Json | null
          created_at?: string
          description?: Json | null
          embedding?: string | null
          gallery?: Json[] | null
          id?: string
          latlang?: Json | null
          location?: unknown
          name?: string
          photosphere?: Json[] | null
          rates?: Json[] | null
          rating?: number | null
          schedules?: Json | null
          tags?: string[] | null
          type?: string | null
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: []
      }
      blogs: {
        Row: {
          author: string | null
          author_avatar: string | null
          author_name: string | null
          category: string | null
          content: Json | null
          cover: string | null
          created_at: string
          district: Database["public"]["Enums"]["district"] | null
          embedding: string | null
          id: string
          short_description: string | null
          tags: string[] | null
          temporary: boolean
          title: string | null
        }
        Insert: {
          author?: string | null
          author_avatar?: string | null
          author_name?: string | null
          category?: string | null
          content?: Json | null
          cover?: string | null
          created_at?: string
          district?: Database["public"]["Enums"]["district"] | null
          embedding?: string | null
          id?: string
          short_description?: string | null
          tags?: string[] | null
          temporary?: boolean
          title?: string | null
        }
        Update: {
          author?: string | null
          author_avatar?: string | null
          author_name?: string | null
          category?: string | null
          content?: Json | null
          cover?: string | null
          created_at?: string
          district?: Database["public"]["Enums"]["district"] | null
          embedding?: string | null
          id?: string
          short_description?: string | null
          tags?: string[] | null
          temporary?: boolean
          title?: string | null
        }
        Relationships: []
      }
      events: {
        Row: {
          address: Json | null
          cover: string | null
          created_at: string
          description: Json | null
          embedding: string | null
          from: string | null
          id: string
          name: string
          range: Json | null
          tags: string[] | null
          to: string | null
          type: string | null
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          address?: Json | null
          cover?: string | null
          created_at?: string
          description?: Json | null
          embedding?: string | null
          from?: string | null
          id?: string
          name: string
          range?: Json | null
          tags?: string[] | null
          to?: string | null
          type?: string | null
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          address?: Json | null
          cover?: string | null
          created_at?: string
          description?: Json | null
          embedding?: string | null
          from?: string | null
          id?: string
          name?: string
          range?: Json | null
          tags?: string[] | null
          to?: string | null
          type?: string | null
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: []
      }
      locations: {
        Row: {
          created_at: string
          geolocation: unknown
          id: string
          name: string | null
          payload: Json | null
          type: string | null
        }
        Insert: {
          created_at?: string
          geolocation?: unknown
          id?: string
          name?: string | null
          payload?: Json | null
          type?: string | null
        }
        Update: {
          created_at?: string
          geolocation?: unknown
          id?: string
          name?: string | null
          payload?: Json | null
          type?: string | null
        }
        Relationships: []
      }
      messages: {
        Row: {
          attachments: Json[] | null
          content: Json[]
          context: string | null
          created_at: string
          id: string
          metadata: Json | null
          receiver: string | null
          sender: string
          updated_at: string
        }
        Insert: {
          attachments?: Json[] | null
          content?: Json[]
          context?: string | null
          created_at?: string
          id: string
          metadata?: Json | null
          receiver?: string | null
          sender: string
          updated_at?: string
        }
        Update: {
          attachments?: Json[] | null
          content?: Json[]
          context?: string | null
          created_at?: string
          id?: string
          metadata?: Json | null
          receiver?: string | null
          sender?: string
          updated_at?: string
        }
        Relationships: []
      }
      notifications: {
        Row: {
          body: string | null
          created_at: string
          id: string
          link: string | null
          read: boolean | null
          target: string | null
          title: string | null
          type: string | null
          updated_at: string | null
        }
        Insert: {
          body?: string | null
          created_at?: string
          id?: string
          link?: string | null
          read?: boolean | null
          target?: string | null
          title?: string | null
          type?: string | null
          updated_at?: string | null
        }
        Update: {
          body?: string | null
          created_at?: string
          id?: string
          link?: string | null
          read?: boolean | null
          target?: string | null
          title?: string | null
          type?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      orders: {
        Row: {
          active: boolean
          address: Json | null
          amount: number
          created_at: string
          details: Json | null
          email: string | null
          history: Json | null
          id: string
          item: string | null
          item_details: Json | null
          options: Json | null
          phone: string | null
          service: string | null
          status: string | null
          type: Database["public"]["Enums"]["servicetype"]
          user: string | null
          user_id: string | null
        }
        Insert: {
          active?: boolean
          address?: Json | null
          amount?: number
          created_at?: string
          details?: Json | null
          email?: string | null
          history?: Json | null
          id: string
          item?: string | null
          item_details?: Json | null
          options?: Json | null
          phone?: string | null
          service?: string | null
          status?: string | null
          type: Database["public"]["Enums"]["servicetype"]
          user?: string | null
          user_id?: string | null
        }
        Update: {
          active?: boolean
          address?: Json | null
          amount?: number
          created_at?: string
          details?: Json | null
          email?: string | null
          history?: Json | null
          id?: string
          item?: string | null
          item_details?: Json | null
          options?: Json | null
          phone?: string | null
          service?: string | null
          status?: string | null
          type?: Database["public"]["Enums"]["servicetype"]
          user?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "orders_item_fkey"
            columns: ["item"]
            isOneToOne: false
            referencedRelation: "prices"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "orders_service_fkey"
            columns: ["service"]
            isOneToOne: false
            referencedRelation: "services"
            referencedColumns: ["id"]
          },
        ]
      }
      prices: {
        Row: {
          active: boolean
          addons: Json[] | null
          available: boolean
          cost: number
          created_at: string
          description: Json | null
          embedding: string | null
          gallery: Json[] | null
          id: string
          model: string | null
          name: string
          options: Json[] | null
          quantity: number
          rates: Json[] | null
          rating: number | null
          service: string
          tags: string[] | null
          type: Database["public"]["Enums"]["servicetype"] | null
          unit: string | null
        }
        Insert: {
          active?: boolean
          addons?: Json[] | null
          available?: boolean
          cost?: number
          created_at?: string
          description?: Json | null
          embedding?: string | null
          gallery?: Json[] | null
          id?: string
          model?: string | null
          name: string
          options?: Json[] | null
          quantity?: number
          rates?: Json[] | null
          rating?: number | null
          service: string
          tags?: string[] | null
          type?: Database["public"]["Enums"]["servicetype"] | null
          unit?: string | null
        }
        Update: {
          active?: boolean
          addons?: Json[] | null
          available?: boolean
          cost?: number
          created_at?: string
          description?: Json | null
          embedding?: string | null
          gallery?: Json[] | null
          id?: string
          model?: string | null
          name?: string
          options?: Json[] | null
          quantity?: number
          rates?: Json[] | null
          rating?: number | null
          service?: string
          tags?: string[] | null
          type?: Database["public"]["Enums"]["servicetype"] | null
          unit?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "prices_service_fkey"
            columns: ["service"]
            isOneToOne: false
            referencedRelation: "services"
            referencedColumns: ["id"]
          },
        ]
      }
      reviews: {
        Row: {
          attractionKey: string | null
          created_at: string
          embedding: string | null
          hidden: boolean
          id: string
          message: string | null
          metadata: Json | null
          options: Json | null
          priceKey: string | null
          serviceKey: string | null
          sub: string | null
          tags: string[] | null
          type: string | null
          user: string | null
          value: number | null
        }
        Insert: {
          attractionKey?: string | null
          created_at?: string
          embedding?: string | null
          hidden?: boolean
          id?: string
          message?: string | null
          metadata?: Json | null
          options?: Json | null
          priceKey?: string | null
          serviceKey?: string | null
          sub?: string | null
          tags?: string[] | null
          type?: string | null
          user?: string | null
          value?: number | null
        }
        Update: {
          attractionKey?: string | null
          created_at?: string
          embedding?: string | null
          hidden?: boolean
          id?: string
          message?: string | null
          metadata?: Json | null
          options?: Json | null
          priceKey?: string | null
          serviceKey?: string | null
          sub?: string | null
          tags?: string[] | null
          type?: string | null
          user?: string | null
          value?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "reviews_attractionKey_fkey"
            columns: ["attractionKey"]
            isOneToOne: false
            referencedRelation: "attractions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "reviews_priceKey_fkey"
            columns: ["priceKey"]
            isOneToOne: false
            referencedRelation: "prices"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "reviews_serviceKey_fkey"
            columns: ["serviceKey"]
            isOneToOne: false
            referencedRelation: "services"
            referencedColumns: ["id"]
          },
        ]
      }
      role_permissions: {
        Row: {
          id: number
          permission: Database["public"]["Enums"]["app_permission"]
          role: Database["public"]["Enums"]["app_role"]
        }
        Insert: {
          id?: number
          permission: Database["public"]["Enums"]["app_permission"]
          role: Database["public"]["Enums"]["app_role"]
        }
        Update: {
          id?: number
          permission?: Database["public"]["Enums"]["app_permission"]
          role?: Database["public"]["Enums"]["app_role"]
        }
        Relationships: []
      }
      services: {
        Row: {
          active: boolean
          address: Json | null
          brand: string | null
          category: string | null
          created_at: string
          credentials: Json[] | null
          description: Json | null
          district: Database["public"]["Enums"]["district"]
          email: string[] | null
          embedding: string | null
          gallery: Json | null
          id: string
          latlang: Json | null
          links: Json[] | null
          location: unknown
          manager: string | null
          name: string
          owner: string | null
          phone: string[] | null
          photosphere: Json | null
          rates: Json[] | null
          rating: number | null
          schedules: Json | null
          tags: string[] | null
          type: Database["public"]["Enums"]["servicetype"]
          verified: string | null
        }
        Insert: {
          active?: boolean
          address?: Json | null
          brand?: string | null
          category?: string | null
          created_at?: string
          credentials?: Json[] | null
          description?: Json | null
          district?: Database["public"]["Enums"]["district"]
          email?: string[] | null
          embedding?: string | null
          gallery?: Json | null
          id?: string
          latlang?: Json | null
          links?: Json[] | null
          location?: unknown
          manager?: string | null
          name: string
          owner?: string | null
          phone?: string[] | null
          photosphere?: Json | null
          rates?: Json[] | null
          rating?: number | null
          schedules?: Json | null
          tags?: string[] | null
          type?: Database["public"]["Enums"]["servicetype"]
          verified?: string | null
        }
        Update: {
          active?: boolean
          address?: Json | null
          brand?: string | null
          category?: string | null
          created_at?: string
          credentials?: Json[] | null
          description?: Json | null
          district?: Database["public"]["Enums"]["district"]
          email?: string[] | null
          embedding?: string | null
          gallery?: Json | null
          id?: string
          latlang?: Json | null
          links?: Json[] | null
          location?: unknown
          manager?: string | null
          name?: string
          owner?: string | null
          phone?: string[] | null
          photosphere?: Json | null
          rates?: Json[] | null
          rating?: number | null
          schedules?: Json | null
          tags?: string[] | null
          type?: Database["public"]["Enums"]["servicetype"]
          verified?: string | null
        }
        Relationships: []
      }
      storage_cleanup_queue: {
        Row: {
          bucket: string
          created_at: string
          id: string
          pathname: string
        }
        Insert: {
          bucket: string
          created_at?: string
          id?: string
          pathname: string
        }
        Update: {
          bucket?: string
          created_at?: string
          id?: string
          pathname?: string
        }
        Relationships: []
      }
      tags: {
        Row: {
          created_at: string
          group: string[] | null
          id: string
          label: string
        }
        Insert: {
          created_at?: string
          group?: string[] | null
          id?: string
          label: string
        }
        Update: {
          created_at?: string
          group?: string[] | null
          id?: string
          label?: string
        }
        Relationships: []
      }
      tourguides: {
        Row: {
          created_at: string
          description: Json | null
          district: Database["public"]["Enums"]["district"] | null
          field: string[] | null
          id: string
          name: string
          options: Json[] | null
          rating: Json | null
          specialty: string[] | null
        }
        Insert: {
          created_at?: string
          description?: Json | null
          district?: Database["public"]["Enums"]["district"] | null
          field?: string[] | null
          id?: string
          name: string
          options?: Json[] | null
          rating?: Json | null
          specialty?: string[] | null
        }
        Update: {
          created_at?: string
          description?: Json | null
          district?: Database["public"]["Enums"]["district"] | null
          field?: string[] | null
          id?: string
          name?: string
          options?: Json[] | null
          rating?: Json | null
          specialty?: string[] | null
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          district: Database["public"]["Enums"]["district"] | null
          id: number
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          district?: Database["public"]["Enums"]["district"] | null
          id?: number
          role?: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          district?: Database["public"]["Enums"]["district"] | null
          id?: number
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      append_message: {
        Args: { p_message: Json; p_room_id: string }
        Returns: undefined
      }
      authorize: {
        Args: {
          requested_permission: Database["public"]["Enums"]["app_permission"]
        }
        Returns: boolean
      }
      custom_access_token_hook: { Args: { event: Json }; Returns: Json }
      extract_text:
        | { Args: { p_doc: Json; p_key: string }; Returns: string[] }
        | {
            Args: { p_doc: Json; p_key: string; p_limit?: number }
            Returns: string[]
          }
      get_events_current: {
        Args: { target_date: string }
        Returns: {
          address: Json | null
          cover: string | null
          created_at: string
          description: Json | null
          embedding: string | null
          from: string | null
          id: string
          name: string
          range: Json | null
          tags: string[] | null
          to: string | null
          type: string | null
          updated_at: string
          updated_by: string | null
        }[]
        SetofOptions: {
          from: "*"
          to: "events"
          isOneToOne: false
          isSetofReturn: true
        }
      }
      get_events_current_or_incoming: {
        Args: { p_date: string }
        Returns: {
          address: Json | null
          cover: string | null
          created_at: string
          description: Json | null
          embedding: string | null
          from: string | null
          id: string
          name: string
          range: Json | null
          tags: string[] | null
          to: string | null
          type: string | null
          updated_at: string
          updated_by: string | null
        }[]
        SetofOptions: {
          from: "*"
          to: "events"
          isOneToOne: false
          isSetofReturn: true
        }
      }
      get_events_incoming_or_next: {
        Args: { p_date: string }
        Returns: {
          address: Json | null
          cover: string | null
          created_at: string
          description: Json | null
          embedding: string | null
          from: string | null
          id: string
          name: string
          range: Json | null
          tags: string[] | null
          to: string | null
          type: string | null
          updated_at: string
          updated_by: string | null
        }[]
        SetofOptions: {
          from: "*"
          to: "events"
          isOneToOne: false
          isSetofReturn: true
        }
      }
      get_random_attraction: {
        Args: { p_count?: number; p_type?: string }
        Returns: {
          address: Json | null
          created_at: string
          description: Json | null
          embedding: string | null
          gallery: Json[] | null
          id: string
          latlang: Json | null
          location: unknown
          name: string
          photosphere: Json[] | null
          rates: Json[] | null
          rating: number | null
          schedules: Json | null
          tags: string[] | null
          type: string | null
          updated_at: string
          updated_by: string | null
        }[]
        SetofOptions: {
          from: "*"
          to: "attractions"
          isOneToOne: false
          isSetofReturn: true
        }
      }
      get_random_blog: {
        Args: { p_category?: string }
        Returns: {
          author: string | null
          author_avatar: string | null
          author_name: string | null
          category: string | null
          content: Json | null
          cover: string | null
          created_at: string
          district: Database["public"]["Enums"]["district"] | null
          embedding: string | null
          id: string
          short_description: string | null
          tags: string[] | null
          temporary: boolean
          title: string | null
        }[]
        SetofOptions: {
          from: "*"
          to: "blogs"
          isOneToOne: false
          isSetofReturn: true
        }
      }
      get_random_catalogs: {
        Args: { p_count?: number; p_type?: string }
        Returns: {
          active: boolean
          addons: Json[] | null
          available: boolean
          cost: number
          created_at: string
          description: Json | null
          embedding: string | null
          gallery: Json[] | null
          id: string
          model: string | null
          name: string
          options: Json[] | null
          quantity: number
          rates: Json[] | null
          rating: number | null
          service: string
          tags: string[] | null
          type: Database["public"]["Enums"]["servicetype"] | null
          unit: string | null
        }[]
        SetofOptions: {
          from: "*"
          to: "prices"
          isOneToOne: false
          isSetofReturn: true
        }
      }
      get_random_services:
        | {
            Args: { p_count?: number; p_type?: string }
            Returns: {
              active: boolean
              address: Json | null
              brand: string | null
              category: string | null
              created_at: string
              credentials: Json[] | null
              description: Json | null
              district: Database["public"]["Enums"]["district"]
              email: string[] | null
              embedding: string | null
              gallery: Json | null
              id: string
              latlang: Json | null
              links: Json[] | null
              location: unknown
              manager: string | null
              name: string
              owner: string | null
              phone: string[] | null
              photosphere: Json | null
              rates: Json[] | null
              rating: number | null
              schedules: Json | null
              tags: string[] | null
              type: Database["public"]["Enums"]["servicetype"]
              verified: string | null
            }[]
            SetofOptions: {
              from: "*"
              to: "services"
              isOneToOne: false
              isSetofReturn: true
            }
          }
        | {
            Args: { p_count: number; p_type: string }
            Returns: Record<string, unknown>
          }
      get_random_tags: {
        Args: { p_limit: number }
        Returns: {
          created_at: string
          group: string[] | null
          id: string
          label: string
        }[]
        SetofOptions: {
          from: "*"
          to: "tags"
          isOneToOne: false
          isSetofReturn: true
        }
      }
      get_user_profile: {
        Args: { p_user_id: string }
        Returns: {
          email: string
          metadata: Json
          phone: string
          user_id: string
        }[]
      }
      locations_inview: {
        Args: {
          max_lat: number
          max_lng: number
          min_lat: number
          min_lng: number
          poi_type?: string
        }
        Returns: {
          id: string
          lat: number
          lng: number
          name: string
          payload: Json
          type: string
        }[]
      }
      nearest_location: {
        Args: { count?: number; lat: number; lng: number }
        Returns: {
          distance: number
          id: string
          lat: number
          lng: number
          name: string
          payload: Json
          type: string
        }[]
      }
    }
    Enums: {
      app_permission:
        | "services.delete"
        | "prices.delete"
        | "attractions.delete"
        | "services.update"
        | "services.create"
        | "prices.update"
        | "prices.create"
        | "attractions.update"
        | "attractions.create"
        | "tourguides.delete"
        | "locations.delete"
        | "orders.delete"
        | "blogs.delete"
        | "events.delete"
        | "reviews.delete"
      app_role: "default" | "merchant" | "regulator" | "admin"
      district: "basco" | "itbayat" | "uyugan" | "sabtang" | "ivana" | "mahatao"
      servicetype:
        | "accommodation"
        | "transportation"
        | "food_service"
        | "recreation"
        | "tourism_service"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  "e-trike": {
    Enums: {},
  },
  public: {
    Enums: {
      app_permission: [
        "services.delete",
        "prices.delete",
        "attractions.delete",
        "services.update",
        "services.create",
        "prices.update",
        "prices.create",
        "attractions.update",
        "attractions.create",
        "tourguides.delete",
        "locations.delete",
        "orders.delete",
        "blogs.delete",
        "events.delete",
        "reviews.delete",
      ],
      app_role: ["default", "merchant", "regulator", "admin"],
      district: ["basco", "itbayat", "uyugan", "sabtang", "ivana", "mahatao"],
      servicetype: [
        "accommodation",
        "transportation",
        "food_service",
        "recreation",
        "tourism_service",
      ],
    },
  },
} as const
