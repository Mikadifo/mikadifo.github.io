import { render, screen, cleanup } from '@testing-library/react';
import projectList from './../../resources/data/projects.json';
import Projects from './Projects';

beforeEach(() => {
    const mockIntersectionObserver = jest.fn();
    mockIntersectionObserver.mockReturnValue({
        observe: () => null,
        unobserve: () => null,
        disconnect: () => null,
    });
    window.IntersectionObserver = mockIntersectionObserver;
    render(<Projects />);
});

afterEach(() => {
    cleanup();
});

test('projects render cards from json (img, texts, links)', () => {
    const projects = screen.getByTestId('projects');
    expect(projects).toBeInTheDocument();
    expect(projects).toHaveTextContent('My Work');
    const projectRendered = screen.getByTestId(projectList[0].id);
    expect(projectRendered).toBeInTheDocument();
    expect(projectRendered).toHaveTextContent(projectList[0].title);
    expect(projectRendered).toHaveTextContent(projectList[0].description);
    expect(projectRendered).toHaveTextContent('Website');
    expect(projectRendered).toHaveTextContent('Source Code');
    expect(projectRendered.querySelector('img')).toHaveAttribute(
        'src',
        projectList[0].img,
    );
    const websiteButton = screen.getByTestId('proj-link');
    const sourceCodeButton = screen.getByTestId('proj-sourcecode');
    expect(websiteButton).toHaveProperty('href', projectList[0].link);
    expect(sourceCodeButton).toHaveProperty('href', projectList[0].sourceCode);
    if (!projectList[0].link)
        expect(websiteButton.firstChild).toHaveClass('bls-bls-disabled');
    if (!projectList[0].sourceCode)
        expect(sourceCodeButton.firstChild).toHaveClass('bls-btn-disabled');
});