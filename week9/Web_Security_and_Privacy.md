
# Web Security and Privacy

## Potential Security Oversights
- **Authentication Issues**:
  - No user authentication.
  - Allowing weak authentication mechanisms.
- **Input Handling**:
  - Failure to sanitize form entries and requests.
- **Communication Security**:
  - Lack of encryption for sensitive communications.
- **Session Management**:
  - Sessions that don't time out.
- **Software Maintenance**:
  - Using outdated or unpatched software.
- **New Vulnerabilities**:
  - Constant discovery of new vulnerabilities.
  - Bugs exposing user data.

## Cross-Site Scripting (XSS)
- **How it works**:
  - Attackers inject arbitrary HTML, including `<script>` tags.
  - Possible actions:
    - Replace a webpage or create a fake page for phishing.
    - Steal sensitive information like cookies, passwords, or session IDs.
- **Mitigation**:
  - Prevent any HTML injection using backend libraries to sanitize inputs.
  - Allow only a limited, safe set of HTML tags for formatting.

## Distributed Denial of Service (DDoS)
- **Nature of Attack**:
  - Overwhelm a server with requests, blocking regular users.
  - Requests come from multiple compromised machines, making them hard to block.
- **Mitigation Strategies**:
  - Rate limiting: Cap the volume of requests per user.
  - Traffic distribution: Spread traffic across networks or servers to manage high volumes.

## Network Security
- **Challenges**:
  - Messages intercepted may compromise confidentiality or integrity.
- **Secure Communication**:
  - Encrypt data to ensure it is unreadable and tamper-proof for unintended recipients.
- **Encryption**:
  - **Symmetric-Key**: Single shared key for encryption/decryption; fast but requires pre-sharing.
  - **Asymmetric-Key**: Different keys for encryption and decryption (e.g., public/private keys).
  - **SSL/TLS**: Combines both types for secure browser-server communication.

## Data Collection and Privacy
- **Reasons for Cookies**:
  - User benefits: Authentication, site preferences, shopping cart data.
  - Developer benefits: Improved user experience, ad tracking, and site metrics.
- **Privacy Policies**:
  - Explain data collection and usage.
  - Must comply with legal frameworks like GDPR (EU) and CCPA (California).
- **Behavior Logging**:
  - Tracks user actions (e.g., clicks, hovers, ad skips) to improve UX or drive metrics.

## Sensitive Information
- **Types of data collected**:
  - Personally Identifiable Information (PII): Name, address, email.
  - Financial data: Credit cards, bank accounts.
  - Legally sensitive: Health (HIPAA), student records (FERPA), children's data (COPPA).
- **Legal Responsibilities**:
  - Developers must comply with privacy laws based on user location (e.g., GDPR, CCPA).

## Practical Applications of Data
- **Ad Tracking**:
  - Link on-screen ads to user actions.
- **Search and Recommendation Systems**:
  - Optimize search results and suggest content based on user behavior.
- **UI Improvements**:
  - Use data-driven metrics to iteratively enhance webpage performance.
