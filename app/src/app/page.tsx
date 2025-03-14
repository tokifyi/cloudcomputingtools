'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Inter, Montserrat } from 'next/font/google'

// Load fonts
const inter = Inter({ subsets: ['latin'] })
const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '500', '600', '700'] })

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState<string | null>("All Tools")
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  // Add animation on initial load
  useEffect(() => {
    setIsLoaded(true)
  }, [])

  // Check system preference for dark mode
  useEffect(() => {
    const darkModePreference = window.matchMedia('(prefers-color-scheme: dark)').matches
    setIsDarkMode(darkModePreference)
  }, [])

  const tools = {
    "Deployment Tool": [
      { name: "Defang", link: "https://defang.io", image: "/images/blue-logo.png" }
    ],
    "Hyperscaler Cloud Tools": [
      { name: "Amazon Web Services (AWS)", link: "https://aws.amazon.com", image: "https://d1.awsstatic.com/logos/aws-logo-lockups/poweredbyaws/PB_AWS_logo_RGB_stacked_REV_SQ.91cd4af40773cbfbd15577a3c2b8a346fe3e8fa2.png" },
      { name: "Microsoft Azure", link: "https://azure.microsoft.com", image: "https://azure.microsoft.com/svghandler/azure?width=300&height=300" },
      { name: "Google Cloud Platform (GCP)", link: "https://cloud.google.com", image: "https://www.gstatic.com/devrel-devsite/prod/v2210deb8920cd4a55bd580441aa58e7853afc04b39a9d9ac4198e1cd7fbe04ef/cloud/images/cloud-logo.svg" }
    ],
    "Alternative Cloud Providers": [
      { name: "Digital Ocean", link: "https://digitalocean.com", image: "https://www.digitalocean.com/_next/static/media/logo.87a8f3b8.svg" },
      { name: "Linode", link: "https://linode.com", image: "https://www.linode.com/wp-content/uploads/2021/01/Linode-Logo-Black.svg" },
      { name: "Civo", link: "https://civo.com", image: "https://www.civo.com/assets/public/brand-assets/civo-logo-colour.svg" },
      { name: "Vultr", link: "https://vultr.com", image: "https://www.vultr.com/media/logo_onwhite.svg" },
      { name: "Scaleway", link: "https://scaleway.com", image: "https://www.scaleway.com/static/scaleway-logo-4c3c839a7770b3c7e26e0bac821874f6.svg" },
      { name: "Oracle", link: "https://oracle.com/cloud", image: "https://www.oracle.com/a/ocom/img/oracle-logo.svg" },
      { name: "IBM", link: "https://ibm.com/cloud", image: "https://www.ibm.com/brand/experience-guides/developer/8f4e3cc2b5d52354a6d43c8edba1e3c9/02_8-bar-positive.svg" },
      { name: "CloudFlare", link: "https://cloudflare.com", image: "https://www.cloudflare.com/img/logo-cloudflare-dark.svg" },
      { name: "Hetzner", link: "https://hetzner.com", image: "https://www.hetzner.com/assets/Uploads/icon-circle.svg" },
      { name: "OVHCloud", link: "https://ovhcloud.com", image: "https://www.ovhcloud.com/themes/contrib/ovh_theme_base/images/ovhcloud-logo.svg" }
    ],
    "CI/CD Tools": [
      { name: "Jenkins", link: "https://jenkins.io", image: "https://www.jenkins.io/images/logos/jenkins/jenkins.svg" },
      { name: "CircleCI", link: "https://circleci.com", image: "https://d3r49iyjzglexf.cloudfront.net/circleci-logo-stacked-fb-657e221fda1646a7e652c09c9fbfb2b0feb5d710089bb4d8e8c759d37a832694.svg" },
      { name: "GitHub Actions", link: "https://github.com/features/actions", image: "https://github.githubassets.com/images/modules/site/features/actions-icon-actions.svg" },
      { name: "ArgoCD", link: "https://argoproj.github.io/argo-cd", image: "https://argo-cd.readthedocs.io/en/stable/assets/logo.png" },
      { name: "GitLab CI/CD", link: "https://docs.gitlab.com/ee/ci", image: "https://about.gitlab.com/images/press/logo/svg/gitlab-logo-500.svg" }
    ],
    "Infrastructure as Code (IaC)": [
      { name: "Pulumi", link: "https://pulumi.com", image: "https://www.pulumi.com/logos/logo-on-white.svg" },
      { name: "Terraform", link: "https://terraform.io", image: "https://www.terraform.io/img/docs/terraform-logo.svg" },
      { name: "Chef", link: "https://chef.io", image: "https://www.chef.io/sites/default/files/2020-07/chef-logo.svg" },
      { name: "Puppet", link: "https://puppet.com", image: "https://www.puppet.com/sites/default/files/2016-07/puppet-logo.svg" }
    ],
    "Cloud Cost Management and Optimization": [
      { name: "CloudHealth by VMware", link: "https://cloudhealthtech.com", image: "https://www.cloudhealthtech.com/sites/default/files/2021-04/cloudhealth-logo.svg" },
      { name: "Apptio", link: "https://apptio.com", image: "https://www.apptio.com/wp-content/themes/apptio/dist/images/logo.svg" }
    ],
    "Cloud Security Tools": [
      { name: "Lacework", link: "https://lacework.com", image: "https://www.lacework.com/wp-content/uploads/2021/05/lacework-logo.svg" }
    ],
    "Monitoring": [
      { name: "Datadog", link: "https://datadoghq.com", image: "https://imgix.datadoghq.com/img/dd_logo_n_70x75.png" },
      { name: "New Relic", link: "https://newrelic.com", image: "https://newrelic.com/themes/custom/erno/assets/mediakit/new_relic_logo_vertical.svg" },
      { name: "Honeycomb", link: "https://honeycomb.io", image: "https://www.honeycomb.io/wp-content/themes/honeycomb/assets/images/logo.svg" },
      { name: "Rollbar", link: "https://rollbar.com", image: "https://rollbar.com/assets/media/rollbar-logo-color.svg" },
      { name: "Sentry", link: "https://sentry.io", image: "https://sentry.io/_assets/logos/sentry-logo-black-517a3eb9a7a8427a2b024536b780fa1e6f3436b24219f9a4368369b8929aeea6.svg" }
    ],
    "Serverless": [
      { name: "AWS Lambda", link: "https://aws.amazon.com/lambda", image: "https://d1.awsstatic.com/product-marketing/Lambda/Logos/Lambda-logo.2465d4d64f4c7a98c3d0a0b9dfd374bc4495e04e.png" },
      { name: "Cloudflare Workers", link: "https://workers.cloudflare.com", image: "https://www.cloudflare.com/img/products/workers/workers.svg" },
      { name: "Apache OpenWhisk", link: "https://openwhisk.apache.org", image: "https://openwhisk.apache.org/images/logo/apache-openwhisk-logo-only.svg" }
    ],
    "Containers": [
      { name: "Docker", link: "https://docker.com", image: "https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png" },
      { name: "Podman", link: "https://podman.io", image: "https://podman.io/images/podman.svg" },
      { name: "HashiCorp Nomad", link: "https://nomadproject.io", image: "https://www.datocms-assets.com/2885/1620155116-brandhcnomadprimaryattributedcolor.svg" },
      { name: "Kubernetes", link: "https://kubernetes.io", image: "https://kubernetes.io/images/kubernetes-horizontal-color.png" }
    ]
  }

  // Filter tools based on search query
  const filteredTools = Object.entries(tools).reduce((acc, [category, items]) => {
    const filteredItems = items.filter(item =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    if (filteredItems.length > 0) {
      acc[category] = filteredItems
    }
    return acc
  }, {} as Record<string, Array<{name: string, link: string, image: string}>>)

  // Get categories that have matching tools
  const filteredCategories = Object.keys(filteredTools)
  
  // Get all tools for the "All Tools" view
  const allFilteredTools = Object.values(filteredTools).flat()
  
  // Get tools for the active category or all tools if "All Tools" is selected
  const displayedTools = activeCategory === "All Tools" 
    ? allFilteredTools 
    : (activeCategory && filteredTools[activeCategory] ? filteredTools[activeCategory] : [])

  return (
    <main className={`min-h-screen bg-white text-gray-900 ${inter.className}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="py-12">
          <h1 className={`text-3xl md:text-4xl font-bold text-center ${montserrat.className}`}>
            Cloud Computing Tools
          </h1>
          
          {/* Search Bar - Simplified */}
          <div className="mt-8 max-w-md mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search tools..."
                className="w-full px-4 py-3 rounded-md border border-gray-200 bg-white text-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <svg 
                className="absolute right-3 top-3 h-5 w-5 text-gray-400" 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </header>

        {/* Main Content with Sidebar Layout */}
        <div className="flex flex-col lg:flex-row">
          {/* Categories Sidebar - Simplified */}
          <div className="lg:w-56 lg:flex-shrink-0 mb-8 lg:mb-0 lg:pr-8">
            <h2 className={`text-sm uppercase tracking-wider text-gray-500 font-medium mb-4 ${montserrat.className}`}>
              Categories
            </h2>
            <nav className="space-y-1">
              {/* All Tools option */}
              <button
                onClick={() => setActiveCategory("All Tools")}
                className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                  activeCategory === "All Tools" 
                    ? 'bg-gray-100 text-gray-900 font-medium' 
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                All Tools
                <span className="ml-2 text-xs rounded-full px-2 py-0.5 bg-gray-200 text-gray-700">
                  {allFilteredTools.length}
                </span>
              </button>
              
              {/* Individual categories */}
              {filteredCategories.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                    activeCategory === category 
                      ? 'bg-gray-100 text-gray-900 font-medium' 
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {category}
                  <span className="ml-2 text-xs rounded-full px-2 py-0.5 bg-gray-200 text-gray-700">
                    {filteredTools[category].length}
                  </span>
                </button>
              ))}
            </nav>
          </div>

          {/* Tools Grid - Minimalist Design */}
          <div className="lg:flex-1 lg:border-l lg:border-gray-100 lg:pl-8">
            <h2 className={`text-xl font-medium mb-6 ${montserrat.className}`}>
              {activeCategory === "All Tools" ? "All Tools" : activeCategory}
            </h2>
            
            {displayedTools.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {displayedTools.map(tool => (
                  <ToolCard 
                    key={`${tool.name}-${activeCategory === "All Tools" ? "all" : activeCategory}`}
                    name={tool.name} 
                    link={tool.link} 
                    image={tool.image} 
                    category={activeCategory === "All Tools" 
                      ? Object.entries(tools).find(([_, items]) => 
                          items.some(item => item.name === tool.name)
                        )?.[0] || ""
                      : activeCategory || ""
                    }
                    viewMode={activeCategory}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 text-gray-500">
                No tools match your search.
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer - Minimalist */}
      <footer className="py-8 mt-16 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} | 
            <a 
              href="https://defang.io" 
              target="_blank" 
              rel="noopener noreferrer"
              className="ml-1 text-gray-900 hover:underline inline-flex items-center"
            >
              Deployed with Defang
              <svg className="ml-1 h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </p>
        </div>
      </footer>
    </main>
  );
}

function ToolCard({ name, link, image, category, viewMode }: { 
  name: string; 
  link: string; 
  image: string; 
  category: string;
  viewMode: string | null;
}) {
  return (
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer"
      className="group block rounded-md border border-gray-200 hover:border-gray-300 bg-white transition-all duration-200"
    >
      <div className="p-5">
        <div className="flex items-center">
          {/* Logo container */}
          <div className="w-12 h-12 mr-4 flex-shrink-0 flex items-center justify-center">
            {/* Image with fallback */}
            <img 
              src={image} 
              alt={name}
              className="max-w-full max-h-full object-contain"
              onError={(e) => {
                // Replace with first letter on error
                const target = e.target as HTMLImageElement;
                const parent = target.parentElement;
                if (parent) {
                  target.style.display = 'none';
                  parent.innerHTML += `<div class="w-10 h-10 rounded-md bg-gray-100 flex items-center justify-center text-gray-400 text-lg font-medium">${name.charAt(0)}</div>`;
                }
              }}
            />
          </div>
          
          {/* Content */}
          <div className="flex-1 min-w-0">
            <h3 className="font-medium text-gray-900 truncate">{name}</h3>
            {viewMode === "All Tools" && (
              <div className="text-xs text-gray-500 mt-1 truncate">{category}</div>
            )}
          </div>
          
          {/* Arrow icon */}
          <svg 
            className="h-5 w-5 text-gray-400 group-hover:text-gray-600 transition-colors ml-2" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </a>
  );
}
