# VolunteerHub Core Library  
_Angular Workspace for Building Reusable VolunteerHub Components and Services_

---

## Project Overview  
The `volunteerhub` workspace is designed to provide a reusable Angular library (`volunteerhub-core`) that simplifies interaction with the **VolunteerHub REST API**. This core library contains essential services and components that can be integrated across multiple Angular applications to manage volunteer schedules, event data, and authentication.

The goal is to create a **modular and extensible** foundation for building applications that interact with the VolunteerHub platform.

---

## Key Features
- **Dynamic Base URL Configuration** – Easily set and switch between different API environments.
- **Authentication Management** – Securely store and validate user credentials using `@capacitor/preferences`.
- **Reusable Components** – Customizable UI components (like event cards) that display data retrieved from the VolunteerHub API.
- **Extensibility** – The component library can be styled and extended by consuming applications.

---

## Structure
The workspace follows a monorepo structure with the core library housed in the `projects/` directory.  

```
volunteerHub/
│
├── projects/
│   └── volunteerhub-core/           # Core Angular Library
│       ├── src/
│       │   ├── lib/
│       │   │   ├── components/      # UI Components (Event Cards, etc.)
│       │   │   ├── services/        # API Service Layer
│       │   │   ├── volunteerhub-core.module.ts
│       │   │   └── public-api.ts
│       ├── README.md
│       └── ng-package.json
│
├── angular.json
├── package.json
└── README.md
```

---

## Components and Services
### 1. Services (volunteerhub-core.service.ts)  
- **VolunteerHubCoreService** – Provides methods to:  
  - Set the base API URL dynamically.  
  - Authenticate users and validate sessions.  
  - Perform GET requests to retrieve event and volunteer data.  

### 2. Components (Event Cards, etc.)  
- **VolunteerHubEventCardComponent**  
  Displays volunteer events with customizable templates, allowing for dynamic styling and extensibility.  

---

## Implementation Details

### Dynamic Base URL  
The API base URL can be configured at runtime to allow switching between different environments (e.g., staging and production).  
```typescript
service.setBaseUrl('https://dailybread.volunteerhub.com/internalapi');
```

### Authentication  
User credentials are stored securely using `@capacitor/preferences`.  
```typescript
await service.setAuth(username, password);
const isValid = await service.isAuthValid();
```

### Fetching Data from the API  
API calls are made using the reusable `get()` method, ensuring that authentication headers are automatically applied.  
```typescript
service.get('volunteerview/view/index').subscribe((data) => {
  console.log(data);
});
```

---

## Central API Documentation  
For detailed information on the VolunteerHub REST API, please refer to the official documentation:  
🔗 **[VolunteerHub API Documentation](https://support.volunteerhub.com/support/solutions)**

---

## How to Use the Library in Your Application  

1. **Install the Library**  
```bash
npm install volunteerhub-core
```

2. **Import the Module**  
Add the core module to your application's `AppModule`:  
```typescript
import { VolunteerHubCoreModule } from 'volunteerhub-core';

@NgModule({
  imports: [VolunteerHubCoreModule],
})
export class AppModule {}
```

3. **Use Components in Templates**  
```html
<volunteerhub-event-card [event]="eventData"></volunteerhub-event-card>
```

---

## Development Workflow
1. **Build the Library**  
```bash
ng build volunteerhub-core
```

2. **Run Tests**  
```bash
ng test volunteerhub-core
```

3. **Publish to npm (Optional)**  
```bash
npm publish dist/volunteerhub-core
```

---

## Contributing  
We welcome contributions to improve this library. Feel free to submit issues or pull requests.

---

## License  
MIT License
