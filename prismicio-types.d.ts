// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type GenreDocumentDataSlicesSlice = HeroSlice;

/**
 * Content for Genre documents
 */
interface GenreDocumentData {
  /**
   * Name field in *Genre*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: genre.name
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  name: prismic.KeyTextField;

  /**
   * Cover Image field in *Genre*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: genre.cover_image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  cover_image: prismic.ImageField<never>;

  /**
   * Has Hero field in *Genre*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: true
   * - **API ID Path**: genre.has_hero
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  has_hero: prismic.BooleanField;

  /**
   * Slice Zone field in *Genre*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: genre.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<GenreDocumentDataSlicesSlice> /**
   * Meta Title field in *Genre*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: genre.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Genre*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: genre.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Genre*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: genre.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Genre document from Prismic
 *
 * - **API ID**: `genre`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type GenreDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<GenreDocumentData>, "genre", Lang>;

type HomeDocumentDataSlicesSlice = GenreBlockSlice | HeroSlice;

/**
 * Content for Home documents
 */
interface HomeDocumentData {
  /**
   * Slice Zone field in *Home*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: home.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HomeDocumentDataSlicesSlice> /**
   * Meta Title field in *Home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: home.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: home.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Home*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: home.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Home document from Prismic
 *
 * - **API ID**: `home`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomeDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<Simplify<HomeDocumentData>, "home", Lang>;

type NavigationDocumentDataSlicesSlice = GenreNavigationSlice;

/**
 * Content for Navigation documents
 */
interface NavigationDocumentData {
  /**
   * Title field in *Navigation*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Karyandra
   * - **API ID Path**: navigation.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Slice Zone field in *Navigation*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<NavigationDocumentDataSlicesSlice>;
}

/**
 * Navigation document from Prismic
 *
 * - **API ID**: `navigation`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type NavigationDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<NavigationDocumentData>,
    "navigation",
    Lang
  >;

/**
 * Item in *Song → Genre Group*
 */
export interface SongDocumentDataGenreGroupItem {
  /**
   * Genre field in *Song → Genre Group*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: song.genre_group[].genre
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  genre: prismic.ContentRelationshipField;
}

type SongDocumentDataSlicesSlice = HeroSlice | LyricsSlice;

/**
 * Content for Song documents
 */
interface SongDocumentData {
  /**
   * Title field in *Song*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: song.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Artist field in *Song*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: song.artist
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  artist: prismic.KeyTextField;

  /**
   * Cover Image field in *Song*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: song.cover_image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  cover_image: prismic.ImageField<never>;

  /**
   * Genre Group field in *Song*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: song.genre_group[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  genre_group: prismic.GroupField<Simplify<SongDocumentDataGenreGroupItem>>;

  /**
   * Slice Zone field in *Song*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: song.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<SongDocumentDataSlicesSlice> /**
   * Meta Title field in *Song*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: song.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Song*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: song.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Song*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: song.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Song document from Prismic
 *
 * - **API ID**: `song`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SongDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<SongDocumentData>, "song", Lang>;

export type AllDocumentTypes =
  | GenreDocument
  | HomeDocument
  | NavigationDocument
  | SongDocument;

/**
 * Item in *Genres → Default → Primary → Genres*
 */
export interface GenreBlockSliceDefaultPrimaryGenresItem {
  /**
   * Genre field in *Genres → Default → Primary → Genres*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: genre_block.default.primary.genres[].genre
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  genre: prismic.ContentRelationshipField<"genre">;
}

/**
 * Primary content in *Genres → Default → Primary*
 */
export interface GenreBlockSliceDefaultPrimary {
  /**
   * Genres field in *Genres → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: genre_block.default.primary.genres[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  genres: prismic.GroupField<Simplify<GenreBlockSliceDefaultPrimaryGenresItem>>;
}

/**
 * Default variation for Genres Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type GenreBlockSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<GenreBlockSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Genres*
 */
type GenreBlockSliceVariation = GenreBlockSliceDefault;

/**
 * Genres Shared Slice
 *
 * - **API ID**: `genre_block`
 * - **Description**: GenreBlock
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type GenreBlockSlice = prismic.SharedSlice<
  "genre_block",
  GenreBlockSliceVariation
>;

/**
 * Default variation for GenreNavigation Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type GenreNavigationSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  never
>;

/**
 * Slice variation for *GenreNavigation*
 */
type GenreNavigationSliceVariation = GenreNavigationSliceDefault;

/**
 * GenreNavigation Shared Slice
 *
 * - **API ID**: `genre_navigation`
 * - **Description**: GenreNavigation
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type GenreNavigationSlice = prismic.SharedSlice<
  "genre_navigation",
  GenreNavigationSliceVariation
>;

/**
 * Primary content in *Hero → Default → Primary*
 */
export interface HeroSliceDefaultPrimary {
  /**
   * Text field in *Hero → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  text: prismic.KeyTextField;

  /**
   * Text Weight field in *Hero → Default → Primary*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **Default Value**: Regular
   * - **API ID Path**: hero.default.primary.text_weight
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  text_weight: prismic.SelectField<"Light" | "Regular" | "Bold", "filled">;

  /**
   * Text Color field in *Hero → Default → Primary*
   *
   * - **Field Type**: Color
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.text_color
   * - **Documentation**: https://prismic.io/docs/field#color
   */
  text_color: prismic.ColorField;

  /**
   * Height field in *Hero → Default → Primary*
   *
   * - **Field Type**: Number
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.height
   * - **Documentation**: https://prismic.io/docs/field#number
   */
  height: prismic.NumberField;

  /**
   * Background Image field in *Hero → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.background_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  background_image: prismic.ImageField<never>;
}

/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroSliceDefaultPrimary>,
  never
>;

/**
 * Primary content in *Hero → Slayandra Avatar → Primary*
 */
export interface HeroSliceSlayandraAvatarPrimary {
  /**
   * Text field in *Hero → Slayandra Avatar → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.slayandraAvatar.primary.text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  text: prismic.KeyTextField;
}

/**
 * Slayandra Avatar variation for Hero Slice
 *
 * - **API ID**: `slayandraAvatar`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceSlayandraAvatar = prismic.SharedSliceVariation<
  "slayandraAvatar",
  Simplify<HeroSliceSlayandraAvatarPrimary>,
  never
>;

/**
 * Slice variation for *Hero*
 */
type HeroSliceVariation = HeroSliceDefault | HeroSliceSlayandraAvatar;

/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSlice = prismic.SharedSlice<"hero", HeroSliceVariation>;

/**
 * Item in *Lyrics → Default → Primary → Lyrics Group*
 */
export interface LyricsSliceDefaultPrimaryLyricsGroupItem {
  /**
   * Section Title field in *Lyrics → Default → Primary → Lyrics Group*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Verse
   * - **API ID Path**: lyrics.default.primary.lyrics_group[].section_title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  section_title: prismic.KeyTextField;

  /**
   * Section Text field in *Lyrics → Default → Primary → Lyrics Group*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: lyrics.default.primary.lyrics_group[].section_text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  section_text: prismic.RichTextField;
}

/**
 * Primary content in *Lyrics → Default → Primary*
 */
export interface LyricsSliceDefaultPrimary {
  /**
   * Lyrics Group field in *Lyrics → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: lyrics.default.primary.lyrics_group[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  lyrics_group: prismic.GroupField<
    Simplify<LyricsSliceDefaultPrimaryLyricsGroupItem>
  >;
}

/**
 * Default variation for Lyrics Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type LyricsSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<LyricsSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Lyrics*
 */
type LyricsSliceVariation = LyricsSliceDefault;

/**
 * Lyrics Shared Slice
 *
 * - **API ID**: `lyrics`
 * - **Description**: Lyrics
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type LyricsSlice = prismic.SharedSlice<"lyrics", LyricsSliceVariation>;

/**
 * Primary content in *RichText → Default → Primary*
 */
export interface RichTextSliceDefaultPrimary {
  /**
   * Content field in *RichText → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Lorem ipsum...
   * - **API ID Path**: rich_text.default.primary.content
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  content: prismic.RichTextField;
}

/**
 * Default variation for RichText Slice
 *
 * - **API ID**: `default`
 * - **Description**: RichText
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type RichTextSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<RichTextSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *RichText*
 */
type RichTextSliceVariation = RichTextSliceDefault;

/**
 * RichText Shared Slice
 *
 * - **API ID**: `rich_text`
 * - **Description**: RichText
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type RichTextSlice = prismic.SharedSlice<
  "rich_text",
  RichTextSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig
    ): prismic.Client<AllDocumentTypes>;
  }

  interface CreateWriteClient {
    (
      repositoryNameOrEndpoint: string,
      options: prismic.WriteClientConfig
    ): prismic.WriteClient<AllDocumentTypes>;
  }

  interface CreateMigration {
    (): prismic.Migration<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      GenreDocument,
      GenreDocumentData,
      GenreDocumentDataSlicesSlice,
      HomeDocument,
      HomeDocumentData,
      HomeDocumentDataSlicesSlice,
      NavigationDocument,
      NavigationDocumentData,
      NavigationDocumentDataSlicesSlice,
      SongDocument,
      SongDocumentData,
      SongDocumentDataGenreGroupItem,
      SongDocumentDataSlicesSlice,
      AllDocumentTypes,
      GenreBlockSlice,
      GenreBlockSliceDefaultPrimaryGenresItem,
      GenreBlockSliceDefaultPrimary,
      GenreBlockSliceVariation,
      GenreBlockSliceDefault,
      GenreNavigationSlice,
      GenreNavigationSliceVariation,
      GenreNavigationSliceDefault,
      HeroSlice,
      HeroSliceDefaultPrimary,
      HeroSliceSlayandraAvatarPrimary,
      HeroSliceVariation,
      HeroSliceDefault,
      HeroSliceSlayandraAvatar,
      LyricsSlice,
      LyricsSliceDefaultPrimaryLyricsGroupItem,
      LyricsSliceDefaultPrimary,
      LyricsSliceVariation,
      LyricsSliceDefault,
      RichTextSlice,
      RichTextSliceDefaultPrimary,
      RichTextSliceVariation,
      RichTextSliceDefault
    };
  }
}
