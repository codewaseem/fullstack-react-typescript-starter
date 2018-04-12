import mongoose from "./mongoose";
import { buildDbSchemaFromConfig } from "./utils";
import AboutUsSchema from "../../schemaConfigs/aboutUsSection";
import ArticleSchema from "../../schemaConfigs/articleSchema";
import TestimonialSchemaConfig from "../../schemaConfigs/testimonialSchema";
import GuestSchemaConfig from "../../schemaConfigs/guestSchema";
import EventSchemaConfig from "../../schemaConfigs/eventSchema";
import SponsorSchemaConfig from "../../schemaConfigs/sponsorSchema";

const PageSettingSchema = new mongoose.Schema({
  pageTitle: {
    type: String,
    required: true
  },
  pageLogoUrl: {
    type: String,
    required: true
  },
  socialLinks: {
    facebook: String,
    google: String,
    twitter: String,
    linkedIn: String,
    instagram: String
  },
  eventSection: {
    name: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    isShown: {
      type: Boolean,
      default: true
    },
    isLinked: {
      type: Boolean,
      default: true
    }
  },
  guestSection: {
    name: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    isShown: {
      type: Boolean,
      default: true
    },
    isLinked: {
      type: Boolean,
      default: true
    }
  },
  testimonialSection: {
    name: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    isShown: {
      type: Boolean,
      default: true
    },
    isLinked: {
      type: Boolean,
      default: true
    }
  },
  sponsorSection: {
    name: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    isShown: {
      type: Boolean,
      default: true
    },
    isLinked: {
      type: Boolean,
      default: true
    },
    mailTo: {
      type: String,
      required: true
    }
  },
  contactSection: {
    name: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    isShown: {
      type: Boolean,
      default: true
    },
    isLinked: {
      type: Boolean,
      default: true
    },
    mailTo: {
      type: String,
      required: true
    }
  }
});

export const PageSetting = mongoose.model("PageSetting", PageSettingSchema);

const AboutSectionSchema = new mongoose.Schema(buildDbSchemaFromConfig(AboutUsSchema));

export const AboutSection = mongoose.model("AboutSection", AboutSectionSchema);

const EventSchema = new mongoose.Schema(buildDbSchemaFromConfig(EventSchemaConfig));

export const Event = mongoose.model("Event", EventSchema);

const GuestSchema = new mongoose.Schema(buildDbSchemaFromConfig(GuestSchemaConfig));

export const Guest = mongoose.model("Guest", GuestSchema);

const TestimonialSchema = new mongoose.Schema(buildDbSchemaFromConfig(TestimonialSchemaConfig));
export const Testimonial = mongoose.model("Testimonial", TestimonialSchema);

const SponsorSchema = new mongoose.Schema(buildDbSchemaFromConfig(SponsorSchemaConfig));
export const Sponsor = mongoose.model("Sponsor", SponsorSchema);

const NewsArticleSchema = new mongoose.Schema(buildDbSchemaFromConfig(ArticleSchema));

export const Article = mongoose.model("Article", NewsArticleSchema);