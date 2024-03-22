import { AsideComponent } from '@/components/Aside';
import { ContentComponent } from '@/components/Content';
import { FooterComponent } from '@/components/Footer';
import { HeaderComponent } from '@/components/Header';
import { SideNavComponent } from '@/components/SideNav';

export default function Home() {
  return (
    <main className="estrutura">
      <HeaderComponent />
      <SideNavComponent />
      <ContentComponent />
      <AsideComponent />
      <FooterComponent />
    </main>
  );
}
