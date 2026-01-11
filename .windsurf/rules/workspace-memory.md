---
trigger: always_on
---

# Workspace Memory Management Rule

**Activation Mode:** Always On

**Priority:** High

## Project Scope Management

### Primary Directive: Maintain Project Scope in Workspace Memory

For all development tasks, you MUST maintain and reference project scope information from the designated workspace memory directories.

## Workspace Structure Requirements

### 1. Project Scope Location

- **Project scope** is maintained in `./.rag-srs` directory
- This directory contains the authoritative source for project requirements, features, and specifications

### 2. Task Sequence Management

- **File:** `./.rag-srs/task-sequence.md` (if exists)
- **Purpose:** Contains all tasks in actionable sequence
- **Usage:** Defines the order of task execution - which task should be completed before which one
- **Reference:** Always check this file first when planning task execution order

### 3. Technical Specifications

- **File:** `./.rag-srs/UI-Specification.md` (if exists)
- **Purpose:** Comprehensive technical documentation including:
  - Technology stack details
  - Component requirements (what components need to be built)
  - Page requirements (what pages need to be built)
  - Additional features and functionality
  - Shared components specifications
  - Core components specifications
  - Layout components specifications
- **Usage:** Primary reference for all implementation details

## File Type Conventions

### Markdown Files (.md)

- **Purpose:** Dedicated for AI IDE consumption
- **Content:** Structured, detailed documentation
- **Format:** Proper markdown formatting with clear sections
- **Usage:** Primary reference for AI agents and development tools

### Text Files (.txt)

- **Purpose:** Initial drafts written manually by author
- **Content:** Raw ideas, initial thoughts, rough notes
- **Format:** Plain text, less structured
- **Usage:** Reference for understanding original intent, but not for implementation

## Task Execution Protocol

### Before Starting Any Task

1. **Check Project Scope**
   - Read `./.rag-srs/UI-Specification.md` for technical requirements
   - Understand what components, pages, and features need to be built

2. **Check Task Sequence**
   - If `./.rag-srs/task-sequence.md` exists, review task dependencies
   - Identify which tasks must be completed before current task
   - Ensure prerequisites are satisfied

3. **Reference Appropriate Documentation**
   - Use `.md` files in `.rag-srs` for implementation guidance
   - Cross-reference with `.txt` files only for context if needed
   - Prioritize structured documentation over rough drafts

### During Implementation

1. **Follow Specifications Exactly**
   - Implement components as specified in `UI-Specification.md` (if exists)
   - Build pages in the order defined in `task-sequence.md` (if exists)
   - Use the technology stack outlined in project scope

2. **Maintain Consistency**
   - Follow patterns established in project scope
   - Use shared components as defined in specifications
   - Implement core components according to documentation

### After Implementation

1. **Update Task Status**
   - If `task-sequence.md` exists, update task completion status
   - Note any deviations from specifications
   - Document any additional requirements discovered

2. **Maintain Documentation**
   - Update `UI-Specification.md` if implementation reveals missing details
   - Add new component specifications if developed
   - Keep project scope current and accurate

## Quality Assurance

### Verification Checklist

Before considering any task complete:

- [ ] Have you read the project scope in `./.rag-srs/UI-Specification.md`?
- [ ] Have you checked `./.rag-srs/task-sequence.md` for task dependencies?
- [ ] Are you implementing components as specified in the documentation?
- [ ] Are you using the correct technology stack as defined in project scope?
- [ ] Are you following the defined task sequence?
- [ ] Are you referencing `.md` files for implementation rather than `.txt` files?

## Error Prevention

### Common Mistakes to Avoid

- **Don't skip project scope review** - Always check `.rag-srs` first
- **Don't ignore task sequence** - Follow defined dependencies
- **Don't implement from rough drafts** - Use structured `.md` files
- **Don't deviate from specifications** - Follow documented requirements exactly
- **Don't assume requirements** - Reference project scope documentation

### Recovery Procedures

If you discover inconsistencies:

1. **Document the inconsistency** - Note what differs between documentation and reality
2. **Prioritize structured documentation** - `.md` files take precedence over `.txt` files
3. **Update project scope** - Correct documentation to reflect accurate requirements
4. **Communicate changes** - Note why deviations were necessary

## Integration with Other Rules

This rule works in conjunction with:

- **RAG Priority Rule** - Local documentation includes `.rag-srs` directory
- **Workflow Automation Rule** - Task sequence from `task-sequence.md`
- **Technology-Specific Rules** - Implementation follows tech stack requirements

## Rationale

This approach ensures:

- **Consistency:** All development follows documented project scope
- **Traceability:** Task dependencies and execution order are maintained
- **Accuracy:** Implementation follows structured specifications over rough drafts
- **Efficiency:** Clear task sequencing prevents wasted effort
- **Quality:** Comprehensive specifications guide high-quality implementation

## Examples

**Good Approach:**

1. "Task: Build user authentication component"
2. "Checking `./.rag-srs/UI-Specification.md` for auth component specs..."
3. "Reviewing `./.rag-srs/task-sequence.md` for prerequisites..."
4. "Implementing auth component as specified in documentation..."
5. "Using defined shared components and core components..."

**Bad Approach:**

1. "Task: Build user authentication component"
2. "Starting implementation without checking project scope..."
3. "Using rough `.txt` files for requirements..."
4. "Ignoring task sequence and dependencies..."
5. "Creating components not specified in project scope..."
