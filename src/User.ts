type User = {
  id: number;
  username: string;
  email: string;
  role: string;
  profile: ProfileType;
  meta: MetaType;
  lastActive: Date;
  isActive: boolean;
};
type ProfileType = {
  firstName: string;
  lastName: string;
  age: number;
  address: AddressType;
  contacts: ContactType[];
  preferences: PreferencesType;
};
type MetaType = {
  lastSearches: ["typescript", "javascript", "node.js"];
  savedItems: [5, 12, 33];
  customSettings: CustomSettings;
};
interface CustomSettings {
  fontSize: string;
  colorBlindMode: boolean;
}
interface ContactType {
  type: string;
  value: string;
  primary: boolean;
  verifiedAt: Date | null;
}

type PreferencesType = {
  theme: string;
  notifications: Notifications;
  privacy: PrivacyType;
  language: string;
};
type Notifications = {
  email: boolean;
  push: boolean;
  sms: boolean;
  frequency: string;
  mutedTopics: ["promotions", "newsletters"];
};
type AddressType = {
  street: string;
  city: string;
  country: string;
  postalCode: string;
  coordinates: Coordinates;
};
type PrivacyType = {
  profileVisibility: string;
  dataSharing: DataSharingType;
};
type DataSharingType = {
  allowAnalytics: boolean;
  allowTargetedAds: boolean;
  allowThirdPartySharing: boolean;
};
type Coordinates = {
  latitude: number;
  longitude: number;
};

const userExample: User = {
  id: 1,
  username: "johndoe",
  email: "john.doe@example.com",
  role: "admin",
  profile: {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    address: {
      street: "123 Main St",
      city: "New York",
      country: "USA",
      postalCode: "10001",
      coordinates: {
        latitude: 40.7128,
        longitude: -74.006,
      },
    },
    contacts: [
      {
        type: "email",
        value: "john.personal@example.com",
        primary: true,
        verifiedAt: new Date("2023-01-15"),
      },
      {
        type: "phone",
        value: "+12345678901",
        primary: false,
        verifiedAt: null,
      },
    ],
    preferences: {
      theme: "dark",
      notifications: {
        email: true,
        push: true,
        sms: false,
        frequency: "daily",
        mutedTopics: ["promotions", "newsletters"],
      },
      privacy: {
        profileVisibility: "friends",
        dataSharing: {
          allowAnalytics: true,
          allowTargetedAds: false,
          allowThirdPartySharing: false,
        },
      },
      language: "en-US",
    },
  },
  meta: {
    lastSearches: ["typescript", "javascript", "node.js"],
    savedItems: [5, 12, 33],
    customSettings: {
      fontSize: "medium",
      colorBlindMode: false,
    },
  },
  lastActive: new Date(),
  isActive: true,
};
