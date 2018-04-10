import mongoose from "./mongoose";

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

const AboutSectionSchema = new mongoose.Schema({
  sectionOne: {
    heading: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  },
  sectionTwo: {
    heading: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  },
  sectionThree: {
    heading: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  }

});

export const AboutSection = mongoose.model("AboutSection", AboutSectionSchema);

const EventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  imageLink: {
    type: String,
    required: true
  },
  privateEvent: {
    type: Boolean,
    default: false
  },
  description: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  rsvp_link: {
    type: String,
    required: true
  },
  fieldOne: {
    heading: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  },
  fieldTwo: {
    heading: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  },
  fieldThree: {
    heading: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  }
});

export const Event = mongoose.model("Event", EventSchema);

const GuestSchema = new mongoose.Schema({
  imageLink: {
    type: String,
    required: true
  },
  jobTitle: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  socialLinks: {
    facebook: String,
    twitter: String,
    instagram: String,
    linkedIn: String,
    google: String
  }
});

export const Guest = mongoose.model("Guest", GuestSchema);

const TestimonialSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  testimonial: {
    type: String,
    required: true
  },
  imageLink: {
    type: String,
    required: true
  }
});

export const Testimonial = mongoose.model("Testimonial", TestimonialSchema);

const SponsorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  imageLink: {
    type: String,
    required: true
  }
});

export const Sponsor = mongoose.model("Sponsor", SponsorSchema);

const NewsArticleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true,
  },
  imageLink: {
    type: String,
    required: true
  },
  summary: {
    type: String,
    required: true
  },
  fullArticleLink: {
    type: String,
    required: true
  }
});

export const Article = mongoose.model("Article", NewsArticleSchema);