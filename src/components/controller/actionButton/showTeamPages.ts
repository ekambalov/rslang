import TeamPage from '../../view/aboutTeam/team';

function showTeamPage(e: Event): void {
    e.stopPropagation();
    document.querySelector('.header')?.replaceWith?.(new TeamPage().start());
}
export default showTeamPage;
