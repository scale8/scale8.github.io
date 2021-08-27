# Analytics

## Introduction

There has been a significant change in the data collected on visitors, with websites having to ask their visitors for consent. We originally wanted to bring a new, simpler and stripped down version of 'tag management' into the fold, but we saw an opportunity to couple this offering with a privacy-friendly analytics solution.

Companies like Fathom and Plausible Analytics have done an incredible job of doing just that. We started development on our Tag Manager product just a few months before Plausible launched on to the scene. We came close to offering a simple installation for both Plausible Analytics and Fathom and this would have seen us connect to their APIs too to enrich our dashboard. Instead, we have chosen to build our own offering and combine this with our Tag Manager product. This enables to reduce the code and networking footprint for any of our users who require our Tag Manager product.

We offer many of the same features as our competitors, however we have abstracted back to Event Groups and Events that enable more comprehensive tooling for those running marketing campaigns.

We have many exciting new features coming soon too. Features you have you not seen before from competitors like Plausible and Fathom. Our analytics comes at **no extra cost** to our users. We needed to log usage to detect issues with the platform and also provide accurate usage billing for our plans.

![Tag Manager - Analytics](/img/tag-manager/tag-manager-analytics.png)

## Real-time delay

We delay real-time data by 60 seconds. This provides a clearer picture for what has happened within that minute, rather than seeing a drop off. Future releases might drop this delay in favour of a new setup we have been working on.

## Terms Explained

### Period

The time range selected. Use the arrows to step forward or back by some value equal to the period selected.

### Event Group

An event group serves as a container for events. An event group defined as 'Clicks' may contain 'Link-Clicks' and 'Button-Clicks'. This abstraction enables a useful view of the event data.

### Event

Everything recorded by our analytics is an event. When the tag-manager is loaded on the page we automatically log this as a **Page View** event. An Action can be created to trigger an event within a Rule with just a few clicks.

### Unique Visitors

The number of unique visitors during the period selected who are linked directly to the event selected. We do this in a privacy-friendly way and without attempting to following your visitors around the web. For this reason if a visitor browses the same website with multiple devices they will be seen as multiple visitors. In our testing however this would appear rare, and our measure of unique visitors is incredibly accurate and allows us to protect privacy.

### Current Visitors

The number of active sessions over the past 5 minutes. This is calculated by summing up all the unique visitors for this period.

### Events per visitor

The average number of events performed per unique users in this Event and Period selected.

### Bounce rate

Calculated by working out the amount of visitors with just a single page-view event. This indicates that a visitor landed on single page and left without exploring any other pages on the website.

### Visit Duration

For visitors who navigate the site and view more than just one page, we calculate the difference from when they were first and last seen and then average this out for all visitors within the period selected.

### Referrers

The source of in-bound traffic. For this we use 'document.referrer' from the browser to inform us of where that visitor came from.

### UTM values

UTM Mediums, Sources and Campaigns. These key pairs enable tagging of your in-bound links to determine medium, source or campaign. This is an industry started and common across all marketing platforms.

### Top Pages

A list of popular pages that have triggered the event over the period specified.

### Entry Pages

A list of first-page landings for your visitors.

### Exit Pages

A list of pages from which the visitor exited the website from.

### Countries

A list of countries determined by looking up the visitors IP address. This has very high level of accuracy but can be fooled by VPNs or bots.

### Devices

Whether the device used to trigger the event was mobile or desktop based. This is determined by the User-Agent header sent in the HTTP request.

### Browsers

The name of the browser used to trigger the event within the specified period. This is determined by the User-Agent header sent in the HTTP request.

### Operating Systems

The name of the operating system used when triggering the event within the specified period. This is determined by the User-Agent header sent in the HTTP request.
