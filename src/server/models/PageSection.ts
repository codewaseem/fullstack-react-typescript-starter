import mongoose from "./mongoose";
import { buildDbSchemaFromConfig } from "./utils";
import AboutUsSchema from "../../schemaConfigs/aboutUsSection";
import ArticleSchema from "../../schemaConfigs/articleSchema";
import TestimonialSchemaConfig from "../../schemaConfigs/testimonialSchema";
import GuestSchemaConfig from "../../schemaConfigs/guestSchema";
import EventSchemaConfig from "../../schemaConfigs/eventSchema";
import SponsorSchemaConfig from "../../schemaConfigs/sponsorSchema";
import PageSettingSchema from "../../schemaConfigs/pageSetting";

export const PageSetting = mongoose.model("PageSetting", new mongoose.Schema(buildDbSchemaFromConfig(PageSettingSchema)));

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