import mongoose from "./mongoose";

const PageSectionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  title: String,
  isShown: {
    type: Boolean,
    default: true
  },
  isLinked: {
    type: Boolean,
    default: true
  },
  order: {
    type: Number,
    default: 1
  },
  description: String
});

export const PageSection = mongoose.model("PageSection", PageSectionSchema);

export const AboutSection = PageSection.discriminator("AboutSection", new mongoose.Schema({
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

}));

export const EventSection = PageSection.discriminator("EventSection", new mongoose.Schema({
  events: [{
    name: {
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
  }]
}));

export const GuestSection = PageSection.discriminator("GuestSection", new mongoose.Schema({
  guests: [{
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
  }]
}));

export const TestimonialSection = PageSection.discriminator("TestimonialSection", new mongoose.Schema({
  testimonials: [{
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
  }]
}));

export const SponsorSection = PageSection.discriminator("SponsorSection", new mongoose.Schema({
  sponsors: [{
    name: {
      type: String,
      required: true
    },
    imageLink: {
      type: String,
      required: true
    },
    isShown: {
      type: Boolean,
      default: true
    }
  }],
  becomeSponsorMailTo: {
    type: String,
    required: true
  }
}));

export const ContactSection = PageSection.discriminator("ContactSection", new mongoose.Schema({
  contactMailTo: {
    type: String,
    required: true
  }
}));