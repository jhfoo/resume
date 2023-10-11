---
LinkGroupTitle: References
LinkTitle1: Golden Four Metrics
LinkUrl1: https://sysdig.com/blog/golden-signals-kubernetes
LinkTitle2: What is CI/CD?
LinkUrl2: https://about.gitlab.com/topics/ci-cd/
LinkTitle3: How to explain Kubernetes in plain English
LinkUrl3: https://enterprisersproject.com/article/2017/10/how-explain-kubernetes-plain-english
LinkTitle4: "Return of the Monolith: Amazon Dumps Microservices for Video Monitoring"
LinkUrl4: https://thenewstack.io/return-of-the-monolith-amazon-dumps-microservices-for-video-monitoring/
---
# Cloud Native is not<br/>for Everyone
## Cloud Native is Hard
Sexy as it sounds, developers transiting from monolithic architectures may be shocked
by the amount of new tech to pick up: including cloud compute (Kubernetes), Continuous 
Integration/Deployment (CICD), and observability metrics (Golden Signals). 

Skills onboarding typically happens in one of 2 ways:
### Committed onboarding
Developers (usually 1 or more designated within the team) 
set time aside to onboard and make recommendations to the team code as necessary.

Challenges and tradeoffs:
1. DELAYED BUSINESS DELIVERABLE: assuming a 2-pizza team of 6-8 people, assigning more 
than 1 person to the onboarding increases timelines by 20-30%.
2. DE-FACTO DEPLOYMENT DELEGATION: whomever is ramped up tends to end up being the team internal
devops, sometimes leading to frustration over reduced development opportunities.

### In-flight onboarding
Developers pick up necessary skills as part of a business 
deliverable.

Challenges and tradeoffs:
1. POOR CONFIGURATION QUALITY: developers tend to choose the shortest path during onboard, 
leading to poor configuration. Evidences include: excessive/indiscriminate copy-paste
from related projects (think 500-line configurations), and brittle execution (unhandled edge cases). 
2. LOW TROUBLESHOOTING CONFIDENCE: when things fail (they eventually will), developers
take longer to fix.

### Notes
1. Maintaining micro-services should be a whole-team capability. The reality is that because
of the learning curve it does not happen often. Cloud tooling is still evolving, and commercial
availabillity to simplify the cognitive load isn't commonplace, comprehensive, and mature. 

## Cloud Native is not Always Necessary
Extending from its Service Oriented Architeture (SOA) ancestry, cloud-native apps makes sense
as the latest iteration of the decoupled solution for scalable, resilient systems. Here's a few
things that still hold true for monoliths:

### Cross-service calls are most performant within the monolith
In a monolith services are merely another library, another function call; no HTTP overheads. 

### Cross-service calls are most reliable within the monolith
No HTTP requirements means less network performance dependencies. No need to do defensive 
programming e.g. write circuit-breaker logic.

### Cloud Native is not required for CICD and other benefits
While CICD provides scalable, parallel deployment for cloud-native teams, monoliths can also
be deployed with CICD. Similarly adoption of Git repositories, observability and other 
popular 'best practices' can apply to monoliths.  

## Conclusion: Understand Your Needs
Decision makers should solicit feedback from multiple perspectives. Engineers have a vested
interest in the cloud: it's great for the resume and helps with code autonomy. Product and 
program managers have higher-level insights to code delivery and other operating challenges.

Cloud native has multiple benefits that comes with certain tradeoffs; cost and time are the
common concerns. It is advantageous to be able to have grounded expectations on what problems 
or enablements are unlocked with cloud-native adoption.