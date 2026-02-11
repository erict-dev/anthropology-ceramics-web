import Link from 'next/link';
import BusinessHoursSmall from '@/components/BusinessHoursSmall'
import { SHOW_OPEN_STUDIO } from '@/config/features';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 text-center sm:text-left sm:grid-cols-2 md:grid-cols-5 gap-8">
          {/* Classes Section */}
          <div>
            <h3 className="text-lg font-semibold">Classes</h3>
            <ul className="mt-2 space-y-2 text-gray-300">
              <li><Link href="/classes" className="hover:text-white">All Classes</Link></li>
              <li><Link href="/classes/4-week-pottery-course-irvine" className="hover:text-white">4-Week Pottery Course</Link></li>
              <li><Link href="/classes/adult-pottery-group-class-irvine" className="hover:text-white">Adult Pottery Group Class</Link></li>
              <li><Link href="/classes/kids-and-family-pottery-irvine" className="hover:text-white">Kids & Family Pottery</Link></li>
              <li><Link href="/classes/beginner-pottery-class-irvine" className="hover:text-white">Beginner Pottery Classes</Link></li>
              <li><Link href="/classes/intermediate-pottery-class-irvine" className="hover:text-white">Intermediate Pottery Classes</Link></li>
              <li><Link href="/classes/private-pottery-event-irvine" className="hover:text-white">Private Pottery Events</Link></li>
            </ul>
          </div>
          
          {/* Workshops Section */}
          <div>
            <h3 className="text-lg font-semibold">Workshops</h3>
            <ul className="mt-2 space-y-2 text-gray-300">
              <li><Link href="/workshops" className="hover:text-white">All Workshops</Link></li>
              <li><Link href="/workshops/matcha-bowl-pottery-workshop-irvine" className="hover:text-white">Matcha Bowl Workshop</Link></li>
              <li><Link href="/workshops/teapot-pottery-workshop-irvine" className="hover:text-white">Teapot Workshop</Link></li>
              <li><Link href="/workshops/ikebana-flower-arrangement-workshop-irvine" className="hover:text-white">Ikebana Flower Arrangement</Link></li>
              <li><Link href="/workshops/ceramic-charm-workshop-irvine" className="hover:text-white">Ceramic Charm Workshop</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold">Resources</h3>
            <ul className="mt-2 space-y-2 text-gray-300">
              <li><Link href="/resources/beginner-pottery-guide" className="hover:text-white">Beginner Pottery Guide</Link></li>
              <li><Link href="/resources/date-night-ideas-irvine" className="hover:text-white">Date Night Ideas</Link></li>
              <li><Link href="/resources/family-activities-irvine" className="hover:text-white">Family Activities</Link></li>
              <li><Link href="/resources/team-building-activities-irvine" className="hover:text-white">Team Building</Link></li>
              <li><Link href="/resources/things-to-do-in-irvine" className="hover:text-white">Things to Do in Irvine</Link></li>
              <li><Link href="/resources/pottery-classes-orange-county" className="hover:text-white">Orange County Pottery</Link></li>
            </ul>
          </div>

          {/* Feature flag: SHOW_OPEN_STUDIO */}
          {SHOW_OPEN_STUDIO && (
          <div>
            <h3 className="text-lg font-semibold">Open Studio</h3>
            <ul className="mt-2 space-y-2 text-gray-300">
              <li><Link href="/open-studio" className="hover:text-white">Memberships</Link></li>
            </ul>
          </div>
          )}

          <div>
            <h3 className="text-lg font-semibold">Gift Cards</h3>
            <ul className="mt-2 space-y-2 text-gray-300">
              <li><Link href="/gift-cards" className="hover:text-white">Gift Cards</Link></li>
            </ul>
          </div>
        </div>

        {/* Address & Hours Section */}
        <div className="mt-8 text-center text-gray-300 text-sm">
          <p>14988 Sand Canyon Ave Studio 6, Irvine CA 92618</p>
          <BusinessHoursSmall />
        </div>
        
        <div className="text-center text-gray-400 mt-4 text-sm">
          © {new Date().getFullYear()} Olomana Studios. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

