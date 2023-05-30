Free Tire [https://aws.amazon.com/free]
What is Cloud Computing :

- cloud Computing is the on-demand delivery of compute power,database storage, application and other it resources
- pay as you go
- provision exactly the right type and size of computing
- access instantly
- simple way to access resources (storage , resources , database)

- ## Cloud Deployment Model

  - ## Private Cloud

    - Cloud Service used by specific organization
    - complete control
    - security for sensitive information
    - meet specific business need
    - Eg : rackspace

  - ## Public Cloud

    - Cloud Resource owned and oprated by third party cloud service provider deliverd over the internet
    - six advantages of cloud

  - ## Hybrid Cloud
    - Keep some servers on premises and extend some capabilities to the cloud
    - control sensitive information secure
    - flexible and cost efficent

- ## Characteristics of Cloud Computing

  1. on-demand self service
  2. Broad network service
  3. multi-tenancy and resource pooling
     - Multiple customer can share the same infrastructure and application with security and privacy
     - Multiple customer are serviced from the same physical resource
  4. Rapid elasticity and scalability
  5. Measured service

- ## Six Advantages of Cloud Computing

  1. Trade capital expance (CAPEX) for operational expance (OPEX)
  2. Benefit from massive economies of scale
  3. Stop guessing capacity
  4. Increase speed and agility
  5. stop spending money running and maintaining data centers
  6. Go to Global in minutes

- ## Problem solved By cloud

  - **flexibility** : chare resource types when need
  - **Cost**- Effectiveness : pay as you go
  - **scalability** : accommodate larger loads by making hardware stronger
  - **Elasticity** : able to scale when need
  - **High-availability** and fault-tolerance : build across data center
  - **Agaility** : rapidly develop , test and lanch software application

- ## Types Of Cloud Computing

  1. Iaas
     - Provide building blocks for cloud IT
     - Easy parallel with traditional on-premises(space) IT
     - Eg : Amazon EC2 (on AWS) , GCP , Azure
  2. PaaS
     - Focus on deployment and management of your application
     - Elastic Beanstalk (on AWS)
     - Heruku , Google App Engine (GCP)
  3. SasS
     - Completed product that is run and managed by service provider
     - Gmail , Dropbox , Zoom

- ## Pricing in AWS Cloud

  - AWS has 3 pricing fundamentals
    1. Compute
       - pay for your compute time
    2. Storage
       - pay for data stored in the cloud
    3. Data Transfer Out of the Cloud
       - pay when data goes out of AWS
       - Data transfer IN is free

- ## AWS Use Case

  - Enterprise It , Backup & storage , Big Data Analytics
  - Website Hosting , Mobile & Social Apps
  - Gaming

- ## AWS Global Infrastructure

  - -> Regions -> Availability Zone -> Data Center
  - AWS Regions

    - <img src="https://github-production-user-asset-6210df.s3.amazonaws.com/125016923/241858150-a8ed3c72-97df-4d93-b3f9-cf9c03b91860.png" />

    - How to Choose Region
    - <img src="./assets/region.png" />

  - AWS Availability Zones
    - Each region has many availability zones
    - <img src="./assets/availabelity%20zone.png" />
  - AWS Data Center
    - Each Availability zone has Data Center
    - they are connected with high bandwidth, ultra-low latency networking
  - AWS Edge Locations/ Points of Presence

    - <img src="./assets/point_of_present.png" />

  - AWS Globle Scoped Service :

    - Identity and Access Management (IAM)
    - Route 53 (DNS service)
    - CloudFront (Content Delivery Network)
    - WAF (Web Application Firewall)

  - AWS Region scoped Service
    - Amazon EC2 (IaaS)
    - Elastic Beanstalk (Paas)
    - Lambda (Function as a Service)
    - Rekognition (Saas)

- ## Shared Responsibility Modal

  - <img src="./assets/shared_reponce_model.png" />

- ## IAM (Identity and Access Management)

  - global service
  - root account created by default, shouldn't be used or share
  - Users and Groups can be assignd JSON documents called policies
  - <img src="./assets/i_am_permission.png" />
  - IAM Policy : IAM policy is a JSON file

    - <img src="./assets/iam_policy.png" />

    - IAM policy JSON file Structure

      - Version : policy language version , always include "20-05-2023"
      - Id : indentifier for the policy
      - Statement : one or more individual statement **(required)**
      - Statement consists of :

        - Sid : Id of Statement
        - Effect : whether the statement **Allow** or **Deny** acceass
        - Principal : account/user/role to which this policy applied to
        - Actions : list of actions this policy allows or Deny
        - Resource : list of resources where the action is apply
        - Condition : conditions for when this policy is in effect **(optional)**
        - EG : <img src="./assets/iam_policy_json.png" />

      - IAM Roles :
        - Group of Permision = Roles
        - <img src="./assets/aws_cli.png" />

    - Multy Password Authentication - MFA

      - users have access to your account and can possibly change configuration or delete resources in you AWS account
      - so you have to Protect Root account
      - MFA = password you know + security device you own
      - <img src="./assets/mfa_type.png" />

    - There Are Three Way to access AWS
      - AWS Management Console (Protect by password)
      - AWS command line interface (CLI) (Protect by Access Key)
      - AWS software Development Key (SDK) (Protect By Access key)
      - Access key are generated through the AWS console
      - every user has their own access keys
      - Access key ID ~= username
      - Secrat Access key ~= password
        - <img src="./assets/aws_cli.png" />
